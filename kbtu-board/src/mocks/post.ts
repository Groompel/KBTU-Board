import { User } from 'src/app/_models/models';

export interface Post {
  id: number;
  subcategoryId?: number;
  title: string;
  description: string;
  creation_date: Date,
  original_date: Date;
  place: string,
  photo: string;
  user_id: number;
  //TODO: user_id field
}
