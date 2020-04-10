export class Post {
  public head: string;
  public description: string;
  // tslint:disable-next-line:variable-name
  public creation_date: string;
  // tslint:disable-next-line:variable-name
  public user_id: string;


  // tslint:disable-next-line:variable-name
  constructor(head: string, description: string, creation_date: string, user_id: string) {
    this.head = head;
    this.description = description;
    this.creation_date = creation_date;
    this.user_id = user_id;
  }
}
