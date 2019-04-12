import {
  Component,
  OnInit,
  SecurityContext
} from '@angular/core';
import {
  PostService,
} from '../../services/post.service';
import {
  DomSanitizer
} from '@angular/platform-browser';
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
  private posts: AllPostsDataSource;
  constructor(private sanitizer: DomSanitizer, private postService: PostService) {}

  async ngOnInit() {
    let searchString = '';
    let howManyPosts = await this.postService.getPostsLength(searchString);
    this.posts = new AllPostsDataSource(this.postService, howManyPosts, searchString);
  }

  highlightHashtags(post: Post) {
    let t = post.content;
    for (let h of post.hashtags) {
      let pattern = new RegExp('(#' + h + ')','gi');
      t = t.replace(pattern, `<a class='hashtag'>$1</a>`);
    }
    let eHTML = this.sanitizer.bypassSecurityTrustHtml(t);
    return eHTML;
  }

}
