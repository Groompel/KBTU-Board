import {Post} from './post';

export const POSTS: Post[] = [
  {
    id: 1,
    user_id: 1,
    header: 'SUPER POST!',
    description: 'Empty',
    reward: 'Nothing, haha',
    views: 0
  },

  {
    id: 2,
    user_id: 2,
    header: 'SUPER POST!!',
    description: 'Pusto',
    reward: 'Nothing, haha',
    views: 0
  },

  {
    id: 3,
    user_id: 1,
    header: 'SUPER POST!!!',
    description: 'Very loooooooooooong descripton. This is made for testing.' +
      'test test test test test test test test test test test test test test test test test test test test',
    reward: 'Nothing, haha',
    views: 0
  },

  {
    id: 4,
    user_id: 3,
    header: 'SUPER POST!!!!',
    description: 'Empty',
    reward: 'Nothing, haha',
    views: 0
  }
];
