import {
  Component,
  OnInit
} from '@angular/core';
import {
  User
} from '../../models/user';

import {
  UserService
} from '../../services/user.service';

import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private user: User;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  async ngOnInit() {
    let username = this.route.snapshot.params['username'];
    this.user = await this.userService.getUser(username);
  }

}
