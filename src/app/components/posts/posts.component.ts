import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  PostService,
} from '../../services/post.service';
import {
  UserService,
} from '../../services/user.service';
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
import {
  User
} from '../../models/user';
import {
  AuthService
} from '../../services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  private posts: AllPostsDataSource;
  private user: User;
  private isUserLoggedIn: Boolean;
  constructor(private authService: AuthService, private router: Router, private sanitizer: DomSanitizer, private postService: PostService) {}

  async ngOnInit() {
    try {
      this.isUserLoggedIn = await this.authService.isUserLoggedIn();
      let searchString = '';
      this.user = await this.authService.getTHEUser();
      let howManyPosts = await this.postService.getPostsLengthFromUsersIFollow(searchString, this.user.username);
      this.posts = new AllPostsDataSource(this.postService, howManyPosts, searchString, this.user.username);
    } catch (e) {
      console.log(e);
    }
  }

  highlightHashtagsAndMentions(post: Post) {
    let t = post.content;
    for (let h of post.hashtags) {
      let pattern = new RegExp('(#' + h + ')', 'gi');
      t = t.replace(pattern, `<a class='hashtag' data-link='/hashtag/${h}'>$1</a>`);
    }

    for (let m of post.mentions) {
      let username = m.username;
      let pattern = new RegExp('(@' + username + ')', 'gi');
      t = t.replace(pattern, `<a class='mention' data-link='/users/user/${username}'>$1</a>`);
    }


    let escapedHTML = this.sanitizer.bypassSecurityTrustHtml(t);
    return escapedHTML;
  }

  goToLink(event) {
    let route = event.target.getAttribute('data-link');
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

}
