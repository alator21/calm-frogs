import {
  Component,
  OnInit
} from '@angular/core';
import {
  Post
} from '../../models/post';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {
  PostService
} from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  private post: Post;
  private postID:number;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
    try {
      this.postID = parseInt(this.route.snapshot.params['postID']);
      this.post = await this.postService.getPost(this.postID);
    } catch (e) {
      console.log(e);
    }

  }

}
