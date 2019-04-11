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
  Router,
  NavigationEnd
} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = new User('');
  }

  login(user: User) {
    this.authService.login(user);
    this.router.navigateByUrl('/');
  }

}
