import {
  Injectable
} from '@angular/core';
import {
  USERS
} from '../mock-data';

import {
  of
} from 'rxjs';

import {
  User
} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USERS;
  constructor() {}


  async getUsers(limit: number, page: number): Promise < User[] > {
    return of(this.users.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getUsersWithUsername(username: string, limit: number, page: number): Promise < User[] > {
    let users$ = [...this.users];
    if (!username) {
      username = '';
    }
    let pattern = new RegExp(`.*${username}.*`, 'gi')
    users$ = users$.filter((e) => {
      return e.username.match(pattern);
    })
    return of(users$.slice(limit * page, limit * page + limit)).toPromise();
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

  async getUser(username: string): Promise < User > {
    return of(this.users.find((e) => {
      return e.username === username;
    })).toPromise();
  }
}
