import {
  Injectable
} from '@angular/core';
import {
  USERS,
  USERFOLLOWS
} from '../mock-data';

import {
  of
} from 'rxjs';

import {
  User
} from '../models/user';

import {
  AuthService
} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USERS;
  constructor(private authService: AuthService) {}


  async getUsers(limit: number, page: number): Promise < User[] > {
    return of(this.users.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getUsersWithUsername(username: string, limit: number, page: number): Promise < any > {
    let users$ = [...this.users];
    let myUser = await this.authService.getTHEUser();
    if (!username) {
      username = '';
    }
    let pattern = new RegExp(`.*${username}.*`, 'gi')
    let ret = users$.filter((e) => {
      return e.username.match(pattern);
    }).map((e) => {
      let iFollowHim = "false";
      for (let i = 0; i < USERFOLLOWS.length; i++) {
        if (USERFOLLOWS[i].user.username === myUser.username) {
          if (USERFOLLOWS[i].follows.username === e.username) {
            iFollowHim = "true";
            break;
          }
        }
      }

      if (myUser.username === e.username) {
        iFollowHim = 'mine';
      }

      return {
        e,
        iFollowHim
      };
    });
    return of(ret.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getNumberOfUsers(username: string): Promise < number > {
    let users$ = [...this.users];
    if (!username) {
      username = '';
    }
    let pattern = new RegExp(`.*${username}.*`, 'gi')
    users$ = users$.filter((e) => {
      return e.username.match(pattern);
    })
    return of(users$.length).toPromise();
  }

  async getUser(username: string): Promise < any > {
    let myUser = await this.authService.getTHEUser();
    let user = this.users.find((e) => e.username === username);
    let iFollowHim = "false";
    for (let i = 0; i < USERFOLLOWS.length; i++) {
      if (USERFOLLOWS[i].user.username === myUser.username) {
        if (USERFOLLOWS[i].follows.username === user.username) {
          iFollowHim = "true"
          break;
        }
      }
    }
    if (myUser.username === username) {
      iFollowHim = "mine";
    }
    return of({
      user,
      iFollowHim
    }).toPromise();
  }

  async updateUser(user: User): Promise < any > {
    return of({
      'ok': true
    }).toPromise();
  }
}
