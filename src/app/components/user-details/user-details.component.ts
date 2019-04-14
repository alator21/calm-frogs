import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  User
} from '../../models/user';

import {
  Post
} from '../../models/post';

import {
  UserService
} from '../../services/user.service';
import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';

import {
  PostService
} from '../../services/post.service';

import {
  UserPostsDataSource
} from '../../dataSources/post-data-source';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailsComponent implements OnInit {
  private user: User;
  private username: string;
  private posts: UserPostsDataSource;
  constructor(private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private userService: UserService, private postService: PostService) {}

  async ngOnInit() {
    try {
      this.username = this.route.snapshot.params['username'];
      this.user = await this.userService.getUser(this.username);
      let searchString = '';
      let numberOfPosts = await this.postService.getPostsOfUserLength(searchString, this.username);

      this.posts = new UserPostsDataSource(this.postService, numberOfPosts, this.username, searchString);
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
      this.router.navigateByUrl('/', {
        skipLocationChange: true
      }).then(() => {
        this.router.navigateByUrl(route);
      });
    }
  }
}
