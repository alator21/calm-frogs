import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor() {}


  async follow(user): Promise < any > {
    console.log(user);
    return {'success': 'yes'};
  }

  async unfollow(user): Promise < any > {
    return {'success': 'yes'};
  }
}
