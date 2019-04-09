import {
  Injectable
} from '@angular/core';
import {
  Post
} from '../models/post';
import {
  User
} from '../models/user';
import {
  CollectionViewer,
  DataSource
} from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of ,
  Subscription
} from 'rxjs';

const POSTS: Post[] = [{
    'content': '1',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '2',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '3',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '4',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '5',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '6',
    'author': new User('raf'),
    'created_at': new Date()
  },

  {
    'content': '7',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '8',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '9',
    'author': new User('raf'),
    'created_at': new Date()
  },
  {
    'content': '10',
    'author': new User('raf'),
    'created_at': new Date()
  },

]

@Injectable()
export class PostService {
  posts = POSTS;
  constructor() {}


  getPosts(limit: number, page: number) {
    return this.posts;
  }

  getPost(postIndex: number) {
    return this.posts[postIndex];
  }
}


export class PostDataSource extends DataSource < string | undefined > {

  private length = this.postService.getPosts.length;
  private pageSize = this.length/2;
  private cachedData = Array.from < string > ({
    length: this.length
  });
  private fetchedPages = new Set < number > ();
  private dataStream = new BehaviorSubject < (string | undefined)[] > (this.cachedData);
  private subscription = new Subscription();
  constructor(private postService: PostService) {
    super()
  }
  connect(collectionViewer: CollectionViewer): Observable < (string | undefined)[] > {
    this.postService.getPosts(1, 0);
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      console.log(range);
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        this.fetchPage(i);
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

  private fetchPage(page: number) {
    // console.log(page);
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    // Use `setTimeout` to simulate fetching data from server.
    console.log(page);
    this.cachedData.splice(page * this.pageSize, this.pageSize,
      ...Array.from({
        length: this.length
      })
      .map((_, i) => this.postService.getPost(page).content));
      console.log(this.cachedData);
    this.dataStream.next(this.cachedData);
  }
}
