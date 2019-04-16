import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from '../../services/user.service';

import {
  FollowService
} from '../../services/follow.service';

import {
  AllUsersDataSource
} from '../../dataSources/user-data-source';
import {
  User
} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private usersAndFollowStatus: AllUsersDataSource;
  private user: User;
  constructor(private userService: UserService, private followService: FollowService) {}

  async ngOnInit() {
    let username = '';
    let howManyUsers = await this.userService.getNumberOfUsers(username);
    this.usersAndFollowStatus = new AllUsersDataSource(this.userService, howManyUsers);
    this.user = new User();
  }

  async onChange(username: string) {
    await this.usersAndFollowStatus.search(username);
  }

  async follow(user) {
    try {
      let d = await this.followService.follow(user);
      if (d.ok) {
        this.changeStatus(user,'true');
      } else {
        alert(`Something wen't wrong`);
      }
    } catch (e) {

    }
  }

  async unfollow(user) {
    try {
      let d = await this.followService.unfollow(user);
      if (d.ok) {
        this.changeStatus(user,'false');
      } else {
        alert(`Something wen't wrong`);
      }
    } catch (e) {

    }
  }

  async changeStatus(user,status) {
    this.usersAndFollowStatus.changeUserFollowStatus(user,status);
  }

}
