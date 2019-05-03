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
  of ,
  Subject
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = USERS;
  userIndex: number;
  private navStateSource = new Subject < any > ();
  navState$ = this.navStateSource.asObservable();
  constructor() {}


  async login(user: User): Promise < any > {
    let correctDetails = false;
    let userIndex = -1;
    for (let i = 0; i < this.users.length; i++) {
      let u = this.users[i];
      if (user.username === u.username && user.password === u.password) {
        correctDetails = true;
        userIndex = i;
        break;
      }
    }
    if (correctDetails) {
      localStorage.setItem('isLoggedIn', 'true');
      this.userIndex = userIndex;
      localStorage.setItem('userIndex', this.userIndex.toString());
    }
    return correctDetails;
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
    if (isNaN(this.userIndex) || this.userIndex === -1) {
      return of(new User()).toPromise()
    }
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

  setNavBarState(state) {
    this.navStateSource.next(state);
  }
}
