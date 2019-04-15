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
  constructor(private userService: UserService,private followService:FollowService) {}

  async ngOnInit() {
    let username = '';
    let howManyUsers = await this.userService.getNumberOfUsers(username);
    this.usersAndFollowStatus = new AllUsersDataSource(this.userService, howManyUsers);
    this.user = new User();
  }

  async onChange(username: string) {
    await this.usersAndFollowStatus.search(username);
  }

  async follow(user){
    try{
      let d = await this.followService.follow(user);
      alert('You followed him succesfully.');
    }catch(e){

    }
    
  }

  async unfollow(user){
    try{
      let d = await this.followService.unfollow(user);
      alert('You unfollowed him succesfully.');
    }catch(e){

    }
  }

}
