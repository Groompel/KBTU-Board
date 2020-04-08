export class User {
  id?: number;
  username: string;
  password: string;
  name: string;
  telegramId: string;
  token?: string;
  constructor(username, password, name, telegramId) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.telegramId = telegramId;
  }
}
