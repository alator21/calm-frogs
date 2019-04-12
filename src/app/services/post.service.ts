import {
  Injectable
} from '@angular/core';
import {
  Post
} from '../models/post';
import {
  of
} from 'rxjs';
import {
  POSTS
} from '../mock-data';

@Injectable()
export class PostService {
  private posts: Post[] = POSTS.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
  constructor() {}

  async getPosts(searchString: string = '', limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })
    return of(posts$.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsLength(searchString: string): Promise < number > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })
    return of(posts$.length).toPromise();
  }
  async getPostsOfUser(searchString: string, username: string, limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })

    return of(posts$.filter(
      (e) => {
        return e.author.username === username
      }
    ).slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsOfUserLength(searchString: string, username: string): Promise < number > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })
    return of(posts$.filter((e) => {
      return e.author.username === username;
    }).length).toPromise();
  }

  async getPost(postID: number): Promise < Post > {
    return of(this.posts.filter(e => e._id === postID)[0]).toPromise();
  }
}
