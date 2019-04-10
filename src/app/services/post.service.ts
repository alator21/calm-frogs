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
  posts: Post[] = POSTS.sort((a,b)=>a.created_at.getTime() - b.created_at.getTime());
  constructor() {}

  async getPosts(limit: number, page: number): Promise < Post[] > {
    return of(this.posts.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsLength(): Promise < number > {
    return of(this.posts.length).toPromise();
  }
}
