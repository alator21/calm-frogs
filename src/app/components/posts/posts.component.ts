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



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private posts: AllPostsDataSource;
  constructor(private postService: PostService) {}

  async ngOnInit() {
    let howManyPosts = await this.postService.getPostsLength();
    this.posts = new AllPostsDataSource(this.postService, howManyPosts);
  }

}
