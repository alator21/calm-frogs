import {
  Injectable
} from '@angular/core';

import {
  USERS
} from '../mock-data';

import {
  User
} from '../models/user';

import {
  of
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = USERS;
  userIndex: number;
  constructor() {}


  async login(user: User): Promise < any > {
    localStorage.setItem('isLoggedIn', 'true');
    this.userIndex = Math.floor(Math.random() * USERS.length);
    localStorage.setItem('userIndex', this.userIndex.toString());

  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('userIndex', '-1');
  }

  isUserLoggedIn(): Boolean {
    return localStorage.getItem('isLoggedIn') === "true";
  }

  async getTHEUser(): Promise < any > {
    this.userIndex = parseInt(localStorage.getItem('userIndex'));
    let randomUser = USERS[this.userIndex];
    return of(randomUser).toPromise();
  }

  async register(user: User): Promise < any > {
    let username = user.username;
    let password = user.password;
    let email = user.email;
    let registerResult = false;
    return of(registerResult).toPromise();
  }
}
