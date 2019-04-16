import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  Route
} from '@angular/router';

import {
  AuthService
} from '../../services/auth.service';

import {
  UserService
} from '../../services/user.service';
import {
  User
} from '../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  private user: User;
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  async ngOnInit() {
    this.user = await this.authService.getTHEUser();
    this.user.password = '';
  }

  async updateDetails() {
    let d = await this.userService.updateUser(this.user);
    if (d.ok) {
      alert('Details updated successfully.');
      this.router.navigateByUrl('/');
    } else {
      alert(`Something wen't wrong!`);
    }
  }

}
