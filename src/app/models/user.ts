export class User {
  public username: string;
  public realName: string;
  public password: string;
  public email: string;

  constructor({
    username = '',
    password = '',
    email = '',
    realName = ''
  } = {}) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.realName = realName;
  }

}
