export class User {
  id?: number;
  username: string;
  password?: string;
  name: string;
  telegramId: string;
  token?: string;
  avatar: string;
  constructor(username, name, telegramId, password = "12345678", avatar = "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png") {
    this.username = username;
    this.password = password;
    this.name = name;
    this.telegramId = telegramId;
    this.avatar = avatar;
  }
}
