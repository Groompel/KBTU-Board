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

  // tslint:disable-next-line:variable-name
  constructor(username: string, password: string, name: string, telegram_username: string, info?: TeacherInfo) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.telegram_username = telegram_username;
    if (info) {
      this.info = info;
    }
  }

  public getGender() {
    return this.info.gender === 'm' ? 'Мужской' : 'Женский';
  }

  public getFaculty() {
    switch (this.info.faculty) {
      case 'fit':
        return 'Факультет информационных технологий.';
    }
  }
}

export class TeacherInfo {
  faculty: string;
  // tslint:disable-next-line:variable-name
  year_of_study: number;
  gender: string;
  subjects: string[];
  rating: number;
  quote: string;


  // tslint:disable-next-line:variable-name
  constructor(faculty: string, year_of_study: number, gender: string, subjects: string[], quote: string) {
    this.faculty = faculty;
    this.year_of_study = year_of_study;
    this.gender = gender;
    this.subjects = subjects;
    this.quote = quote;
    this.rating = 0;
  }
}
