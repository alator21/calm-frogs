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
  private user: User = new User();
  private isLoggedIn: Boolean;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.navState$.subscribe((state) => {
      this.user.username = state.username;
      this.isLoggedIn = state.isLoggedIn;
    })
  }

  async ngOnInit() {
    await this.updateNavbar()
  }

  async updateNavbar() {
    this.isLoggedIn = this.authService.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.user = await this.authService.getTHEUser();
    }
  }

  logout() {
    this.authService.logout();
    this.authService.setNavBarState({
      username: '',
      'isLoggedIn': false
    });
    this.router.navigateByUrl('/login');
  }

  goToLink(event) {
    let route = event.target.getAttribute('data-link');
    if (route) {
      this.router.navigateByUrl(route);
      this.router.navigateByUrl('/', {
        skipLocationChange: true
      }).then(() => {
        this.router.navigateByUrl(route);
      });
    }
  }

}
