import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from '../../services/user.service';

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
  constructor(private userService: UserService) {}

  async ngOnInit() {
    let username = '';
    let howManyUsers = await this.userService.getNumberOfUsers(username);
    this.usersAndFollowStatus = new AllUsersDataSource(this.userService, howManyUsers);
    this.user = new User();
  }

  async onChange(username: string) {
    await this.usersAndFollowStatus.search(username);
  }

}
