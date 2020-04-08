export class User {
  id?: number;
  token?: string;
  username: string;
  password: string;
  name: string;
  info: TeacherInfo;
  telegram_username: string;
  profile_photo: string;

  // poka chto budet path to file

  constructor(username, password, name, telegramId) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.telegram_username = telegramId;
  }
}

class TeacherInfo {
  faculty: string;
  // tslint:disable-next-line:variable-name
  year_of_study: number;
  gender: string;
  subjects: string[];
  rating: number;
  quote: string;


  // tslint:disable-next-line:variable-name
  constructor(faculty: string, year_of_study: number, gender: string, subjects: string[], rating: number, quote: string) {
    this.faculty = faculty;
    this.year_of_study = year_of_study;
    this.gender = gender;
    this.subjects = subjects;
    this.rating = rating;
    this.quote = quote;
  }
}
