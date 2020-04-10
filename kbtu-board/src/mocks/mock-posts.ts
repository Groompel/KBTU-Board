import {Post} from './post';
import { User } from 'src/app/_models/models';
import { USERS } from 'src/app/backend-data';

//TODO: DOfiga chego
export const POSTS: {[key: string]: Post[]} = {
  help: [
    {
    id: 1,
    subcategoryId: 1,
    title: 'Принести кофе',
    description: 'Sint eu laboris tempor officia amet sunt irure consequat ea dolor.',
    reward: 'Nothing, haha',
    views: 0,
    img: "https://picsum.photos/200/300",
    date: new Date(),
    user: USERS[1]
  },
  {
    id: 2,
    subcategoryId: 1,
    title: 'Принести зарядку с общаги',
    description: 'Laborum minim culpa et exercitation ea do do sit voluptate duis culpa.',
    user_id: 2,
    reward: 'Nothing, haha',
    views: 0,
    img: "https://picsum.photos/300/300",
    date: new Date(2020, 3, 4, 2, 4),
    user: USERS[1]

  },
  {
    id: 3,
    subcategoryId: 1,
    title: 'Помогите написать сайт',
    description: 'Proident incididunt incididunt irure exercitation irure cupidatat nulla Lorem laboris culpa nulla.',
    reward: 'Nothing, haha',
    views: 10,
    date: new Date(2019, 8, 19, 18, 28),
    user: USERS[1]


  },
  {
    id: 4,
    subcategoryId: 2,
    title: 'Помогу сделать уборку',
    description: 'Amet nulla aute excepteur officia dolor sint veniam incididunt magna ex aliqua.',
    reward: 'Nothing, haha',
    views: 0,
    date: new Date(),
    img: "https://picsum.photos/200/200",
    user: USERS[1]


  },
  {
    id: 5,
    subcategoryId: 1,
    title: 'Нужен ноутбук на время',
    description: 'Мой сломался Aliqua do nisi ipsum minim do ad consequat ea excepteur ut Lorem aute mollit. Pariatur consequat mollit esse eu. Deserunt cillum et labore enim minim anim elit. Labore veniam laborum in cupidatat laboris. Aliqua Lorem eu qui pariatur dolore. Voluptate ipsum laboris consequat pariatur laboris consequat pariatur tempor ad velit consectetur velit magna. Non irure enim nostrud sint aliqua eiusmod nulla tempor consequat non excepteur sunt ad non. Aliqua velit sint reprehenderit nisi aliqua laborum enim. Nostrud nisi fugiat cillum sit aute dolore exercitation proident irure voluptate aliquip culpa irure. Excepteur irure amet non ex ullamco officia cupidatat sit quis consectetur. Qui est occaecat ullamco aliqua consectetur do. Irure exercitation consequat aliquip nisi velit est nulla mollit officia adipisicing do mollit dolore. Eiusmod aute aliqua cillum elit. Dolor sint ea excepteur ad non officia nisi aute pariatur id nulla non laboris. Proident culpa sit cillum mollit do dolore officia culpa nulla aliquip tempor.',
    reward: 'Nothing, haha',
    views: 0,
    date: new Date(),
    img: "https://picsum.photos/500/300",
    user: USERS[1]

  },
  ],
  lostAndFound: [

  ],

  study: [

  ]

}
