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

import {
  HashtagDataSource
} from '../../dataSources/post-data-source';


import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  posts: HashtagDataSource;
  hashtag: string;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    try {
      this.hashtag = this.route.snapshot.params['hashtag'];
      let searchString = '';
      let numberOfPosts = await this.postService.getPostsOfHashtagLength(searchString, this.hashtag);
      this.posts = new HashtagDataSource(this.postService, numberOfPosts, this.hashtag, searchString);
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
