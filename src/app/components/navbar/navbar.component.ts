import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User = new User('Raf');
  isLoggedIn:Boolean;
  constructor() {}

  ngOnInit() {
    this.updateNavbar()
  }

  updateNavbar() {
    this.isLoggedIn = true;
    this.user.username = 'Raf';
  }

}
