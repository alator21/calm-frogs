import {
  Component,
  OnInit
} from '@angular/core';
import {
  PostService,
  PostDataSource
} from '../../services/post.service';
import {
  Post
} from '../../models/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  ds = new PostDataSource(this.postService);
  constructor(private postService: PostService) {}

  ngOnInit() {}

}

