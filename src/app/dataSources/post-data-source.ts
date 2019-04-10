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

  constructor(private postService: PostService, numberOfPosts: number) {
    super()
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

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  async fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);
    let d = await this.postService.getPosts(this.pageSize, page);
    this.cachedData.splice(page * this.pageSize, this.pageSize,
      ...Array.from < Post > ({
        length: d.length
      }).map((_, i) => {
        return new Post(d[i].content, d[i].author, d[i].created_at);
      }));
    this.dataStream.next(this.cachedData);
  }
}
