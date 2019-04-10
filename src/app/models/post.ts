import {
  User
} from './user';

export class Post {
  content: string;
  author: User;
  created_at: Date;
  constructor(content:string, author:User, created_at:Date) {
    this.content = content;
    this.author = author;
    this.created_at = created_at;
  }
}
