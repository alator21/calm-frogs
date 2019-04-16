import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor() {}


  async follow(user): Promise < any > {
    return {'ok': true};
  }

  async unfollow(user): Promise < any > {
    return {'ok': true};
  }
}
