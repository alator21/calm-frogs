import {
  User
} from './user';

export class Post {
  public content: string;
  public author: User;
  public created_at: Date;
  public _id: number;
  public hashtags: string[];
  public mentions: User[];
  constructor({
    content = '',
    author = new User(),
    created_at = new Date(),
    _id = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0,
    hashtags = [],
    mentions = []
  } = {}) {
    this.content = content;
    this.author = author;
    this.created_at = created_at;
    this._id = _id;
    this.hashtags = hashtags;
    this.mentions = mentions;
  }
}
