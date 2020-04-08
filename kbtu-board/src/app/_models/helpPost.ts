import {Post} from './post';

export class HelpPost extends Post {
  reward: string;


  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  constructor(head: string, description: string, creation_date: string, user_id: string, reward: string) {
    super(head, description, creation_date, user_id);
    this.reward = reward;
  }
}
