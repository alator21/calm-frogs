import {
  Component,
  OnInit,
  ViewEncapsulation
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
  Router
} from '@angular/router';

import {
  Post
} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  private posts: AllPostsDataSource;
  constructor(private router: Router, private sanitizer: DomSanitizer, private postService: PostService) {}

  async ngOnInit() {
    let searchString = '';
    let howManyPosts = await this.postService.getPostsLength(searchString);
    this.posts = new AllPostsDataSource(this.postService, howManyPosts, searchString);
  }

  highlightHashtagsAndMentions(post: Post) {
    let t = post.content;
    for (let h of post.hashtags) {
      let pattern = new RegExp('(#' + h + ')', 'gi');
      t = t.replace(pattern, `<a class='hashtag' data-link='/hashtag/${h}'>$1</a>`);
    }

    for (let m of post.mentions){
      let username = m.username;
      let pattern = new RegExp('(@' + username + ')', 'gi');
      t = t.replace(pattern, `<a class='mention' data-link='/users/user/${username}'>$1</a>`);
    }


    let escapedHTML = this.sanitizer.bypassSecurityTrustHtml(t);
    return escapedHTML;
  }

  goToLink(event) {
    let route = event.target.getAttribute('data-link');
    if (route){
      this.router.navigateByUrl(route);
    }
  }

}
