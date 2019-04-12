import {
  Component,
  OnInit
} from '@angular/core';
import {
  User
} from '../../models/user';

import {
  UserService
} from '../../services/user.service';

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
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private user: User;
  private posts;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private postService: PostService) {}

  async ngOnInit() {
    let username = this.route.snapshot.params['username'];
    this.user = await this.userService.getUser(username);
    let searchString = '';
    this.posts = new UserPostsDataSource(this.postService, 1, username, searchString);
  }

}
