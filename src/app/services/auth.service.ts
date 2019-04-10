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


  async login(user: User): Promise < any > {
    console.log(user);
  }
}
