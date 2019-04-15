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
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = new User();
  }

  async login(user: User) {
    try {
      let correctDetails = await this.authService.login(user);
      if (correctDetails) {
        this.authService.setNavBarState({
          username: user.username,
          'isLoggedIn': true
        });
        this.router.navigateByUrl('/');
      } else {
        console.log('Wrong username/password');
      }
    } catch (e) {
      console.log(`Something wen't wrong ;(`);
    }
  }

}
