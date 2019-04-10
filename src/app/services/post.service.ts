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
  BehaviorSubject,
  Observable,
  of ,
  Subscription
} from 'rxjs';


const POSTS: Post[] = [new Post("123","","")]

@Injectable()
export class PostService {
  constructor() {}

  async getPosts(limit: number, page: number): Promise < any > {
    return POSTS;
  }
}
