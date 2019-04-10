import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  PostService,
} from '../../services/post.service';

import {
  AllPostsDataSource
} from '../../dataSources/post-data-source';
import {
  Post
} from '../../models/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  ds = new AllPostsDataSource(this.postService, 5);
  constructor(private postService: PostService) {}

  ngOnInit() {}

}
