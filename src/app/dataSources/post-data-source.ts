import {
  CollectionViewer,
  DataSource
} from '@angular/cdk/collections';
import {
  BehaviorSubject,
  Observable,
  Subscription
} from 'rxjs';

import {
  PostService
} from '../services/post.service';
import {
  Post
} from '../models/post';

export class AllPostsDataSource extends DataSource < Post | undefined > {
  private length;
  private pageSize = 5;
  private fetchedPages = new Set < number > ();
  private cachedData;
  private dataStream;
  private subscription = new Subscription();
  private searchString: string;

  constructor(private postService: PostService, numberOfPosts: number, searchString: string) {
    super()
    this.searchString = searchString;
    this.length = numberOfPosts;
    this.cachedData = Array.from < Post > ({
      length: this.length
    });
    this.dataStream = new BehaviorSubject < (Post | undefined)[] > (this.cachedData);
  }

  connect(collectionViewer: CollectionViewer): Observable < (Post | undefined)[] > {
    this.subscription.add(collectionViewer.viewChange.subscribe(async range => {
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        await this.fetchPage(i);
      }
    }));
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  public async search(searchString: string) {
    this.searchString = searchString;
    let numberOfPosts = await this.postService.getPostsLength(this.searchString);
    this.length = numberOfPosts;
    this.fetchedPages = new Set < number > ();
    this.cachedData = Array.from < Post > ({
      length: this.length
    });
    await this.fetchPage(0);
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  async fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);
    let d = await this.postService.getPosts(this.searchString, this.pageSize, page);
    this.cachedData.splice(page * this.pageSize, this.pageSize,
      ...Array.from < Post > ({
        length: d.length
      }).map((_, i) => {
        let post = d[i];
        return new Post({
          'content': post.content,
          'author': post.author,
          'created_at': post.created_at,
          '_id' : post._id
        });
      }));
    this.dataStream.next(this.cachedData);
  }
}


export class UserPostsDataSource extends DataSource < Post | undefined > {
  private length;
  private pageSize = 5;
  private fetchedPages = new Set < number > ();
  private cachedData;
  private dataStream;
  private subscription = new Subscription();
  private username: string;
  private searchString: string;

  constructor(private postService: PostService, numberOfPosts: number, username: string, searchString: string) {
    super()
    this.searchString = searchString;
    this.username = username;
    this.length = numberOfPosts;
    this.cachedData = Array.from < Post > ({
      length: this.length
    });
    this.dataStream = new BehaviorSubject < (Post | undefined)[] > (this.cachedData);
  }

  connect(collectionViewer: CollectionViewer): Observable < (Post | undefined)[] > {
    this.subscription.add(collectionViewer.viewChange.subscribe(async range => {
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        await this.fetchPage(i);
      }
    }));
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  public async search(searchString: string) {
    this.searchString = searchString;
    let numberOfPosts = await this.postService.getPostsOfUserLength(this.searchString,this.username);
    this.length = numberOfPosts;
    this.fetchedPages = new Set < number > ();
    this.cachedData = Array.from < Post > ({
      length: this.length
    });
    await this.fetchPage(0);
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  async fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);
    let d = await this.postService.getPostsOfUser(this.searchString, this.username, this.pageSize, page);
    this.cachedData.splice(page * this.pageSize, this.pageSize,
      ...Array.from < Post > ({
        length: d.length
      }).map((_, i) => {
        let post = d[i];
        return new Post({
          'content': post.content,
          'author': post.author,
          'created_at': post.created_at,
          '_id' : post._id
        });
      }));
    this.dataStream.next(this.cachedData);
  }
}
