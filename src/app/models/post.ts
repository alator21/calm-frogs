import {
  User
} from './user';

export class Post {
  public content: string;
  public author: User;
  public created_at: Date;
  public _id: number
  constructor({
    content = '',
    author = new User(),
    created_at = new Date(),
    _id = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0
  } = {}) {
    this.content = content;
    this.author = author;
    this.created_at = created_at;
    this._id = _id;
  }
}
