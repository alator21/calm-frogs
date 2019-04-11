import {
  Injectable
} from '@angular/core';

import {
  USERS
} from '../mock-data';

import {
  User
} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = USERS;
  constructor() {}


  login(user: User) {
    localStorage.setItem('isLoggedIn', 'true');
    console.log(user);
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    console.log('Logout!!');
  }

  isUserLoggedIn(): Boolean {
    return localStorage.getItem('isLoggedIn') === "true";
  }
}
