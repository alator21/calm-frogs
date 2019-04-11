import {
  CollectionViewer,
  DataSource
} from '@angular/cdk/collections';
import {
  BehaviorSubject,
  Observable,
  Subscription
} from 'rxjs';

import {
  UserService
} from '../services/user.service';
import {
  User
} from '../models/user';

export class AllUsersDataSource extends DataSource < User | undefined > {
  private length;
  private pageSize = 5;
  private fetchedPages = new Set < number > ();
  private cachedData;
  private dataStream;
  private subscription = new Subscription();
  private searchString;

  constructor(private userService: UserService, numberOfUsers: number) {
    super()
    this.length = numberOfUsers;
    this.cachedData = Array.from < User > ({
      length: this.length
    });
    this.dataStream = new BehaviorSubject < (User | undefined)[] > (this.cachedData);
  }

  connect(collectionViewer: CollectionViewer): Observable < (User | undefined)[] > {
    this.subscription.add(collectionViewer.viewChange.subscribe(async range => {
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        await this.fetchPage(i);
      }
    }));
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  async search(username: string) {
    this.searchString = username;
    let numberOfUsers = await this.userService.getNumberOfUsers(this.searchString);
    this.length = numberOfUsers;
    this.fetchedPages = new Set < number > ();
    this.cachedData = Array.from < User > ({
      length: this.length
    });
    await this.fetchPage(0);
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  async fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);
    let d = await this.userService.getUsersWithUsername(this.searchString, this.pageSize, page);
    this.cachedData.splice(page * this.pageSize, this.pageSize,
      ...Array.from < User > ({
        length: d.length
      }).map((_, i) => {
        return new User({
          'username': d[i].username,
          'email': d[i].email,
          'realName': d[i].realName
        });
      }));
    this.dataStream.next(this.cachedData);
  }
}
