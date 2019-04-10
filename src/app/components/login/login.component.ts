import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../../models/user';

import {
  AuthService
} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = new User('');
  }

  async login(user: User) {
    await this.authService.login(user);
  }

}
