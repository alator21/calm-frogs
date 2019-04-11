import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../../models/user';

import {
  Router,
  NavigationEnd
} from '@angular/router';


import {
  AuthService
} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User = new User('Raf');
  isLoggedIn: Boolean;
  navigationSubscription;
  constructor(private router: Router, private authService: AuthService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.updateNavbar();
      }
    });
  }

  ngOnInit() {
    this.updateNavbar()
  }

  updateNavbar() {
    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.user.username = 'Raf';
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
