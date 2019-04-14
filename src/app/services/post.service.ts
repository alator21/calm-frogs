import {
  Injectable
} from '@angular/core';
import {
  Post
} from '../models/post';
import {
  of
} from 'rxjs';
import {
  POSTS,
  USERFOLLOWS
} from '../mock-data';

@Injectable()
export class PostService {
  private posts: Post[] = POSTS.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
  private userFollows: any[] = USERFOLLOWS;
  constructor() {}

  async getPosts(searchString: string = '', limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })
    return of(posts$.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsLength(searchString: string): Promise < number > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    })
    return of(posts$.length).toPromise();
  }
  async getPostsOfUser(searchString: string, username: string, limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter(
      (e) => {
        let postGotMyUsernameAsMention = false;
        for (let i = 0; i < e.mentions.length; i++) {
          if (username === e.mentions[i].username) {
            postGotMyUsernameAsMention = true;
            break;
          }
        }
        return (postGotMyUsernameAsMention || (e.author.username === username))
      }
    );

    return of(posts$.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsOfUserLength(searchString: string, username: string): Promise < number > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter((e) => {
      let postGotMyUsernameAsMention = false;
      for (let i = 0; i < e.mentions.length; i++) {
        if (username === e.mentions[i].username) {
          postGotMyUsernameAsMention = true;
          break;
        }
      }
      return (postGotMyUsernameAsMention || (e.author.username === username))
    })
    return of(posts$.length).toPromise();
  }

  async getPostsOfHashtagLength(searchString: string, hashtag: string): Promise < number > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter((e) => {
      let postGotHashtag = false;
      for (let p of e.hashtags) {
        if (p === hashtag) {
          postGotHashtag = true;
          break;
        }
      }
      return (postGotHashtag);
    })
    return of(posts$.length).toPromise();
  }

  async getPostsOfHashtag(searchString: string = '', hashtag: string, limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter((e) => {
      let postGotHashtag = false;
      for (let p of e.hashtags) {
        if (p === hashtag) {
          postGotHashtag = true;
          break;
        }
      }
      return (postGotHashtag);
    })
    return of(posts$.slice(limit * page, limit * page + limit)).toPromise();
  }


  async getPost(postID: number): Promise < Post > {
    return of(this.posts.filter(e => e._id === postID)[0]).toPromise();
  }

  async getPostsFromUsersIFollow(searchString: string = '', username: string, limit: number, page: number): Promise < Post[] > {
    let posts$ = [...this.posts];
    let usersIFollow = this.userFollows.filter((e) => {
      return username === e.user.username;
    }).map((e) => {
      return e.follows;
    })
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter((e) => {
      for (let u of usersIFollow) {
        if (u.username === e.author.username) {
          return true;
        }
      }
      return false;
    })
    return of(posts$.slice(limit * page, limit * page + limit)).toPromise();
  }

  async getPostsLengthFromUsersIFollow(searchString: string = '', username: string): Promise < number > {
    let posts$ = [...this.posts];
    let usersIFollow = this.userFollows.filter((e) => {
      return username === e.user.username;
    }).map((e) => {
      return e.follows;
    })
    let pattern = new RegExp(`.*${searchString}.*`, 'gi')
    posts$ = posts$.filter((e) => {
      return e.content.match(pattern);
    }).filter((e) => {
      for (let u of usersIFollow) {
        if (u.username === e.author.username) {
          return true;
        }
      }
      return false;
    })
    return of(posts$.length).toPromise();
  }



}
