import { User } from 'src/app/_models/models';

export interface Post {
  id: number;
  subcategoryId: number;
  title: string;
  description: string;
  reward: string;
  views: number;
  date: Date;
  user: User;
  img?: string;
  //TODO: user_id field
}
