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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: User;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = new User();
  }

  async register(user: User) {
    let result = await this.authService.register(user);
    if (result){
      this.router.navigateByUrl('/');
      return;
    }
    console.log('Register error');
  }

}
