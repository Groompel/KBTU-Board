import {TeacherInfo, User} from './_models/models';

export const LAST_ADS = {
  lost: [
    {
      id: 0,
      title: 'Зонтик Umbrella company inc',
      img: 'https://picsum.photos/200',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Потерял скорее всего на 1 этаже Толе Би'
    },
    {
      id: 1,
      title: 'Телефон IPhone 7 розовый',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },
    {
      id: 2,
      title: 'Пауэрбанк серый Xiaomi',
      img: 'https://picsum.photos/200',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Sunt ea eu aliquip incididunt. Quis commodo pariatur sit ut commodo consectetur deserunt eu ad consectetur nisi cupidatat.',
    },
    {
      id: 3,
      title: 'Телефон IPhone X серый',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },
    {
      id: 4,
      title: 'Куртка красная',
      img: 'https://picsum.photos/200',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Потерял скорее всего на 3 этаже Абылай Хана'
    },
    {
      id: 5,
      title: 'Наушники проводные белые',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },

  ],
  found: [
    {
      id: 0,
      title: 'Зонтик Umbrella company inc',
      img: 'https://picsum.photos/200',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Потерял скорее всего на 1 этаже Толе Би'
    },
    {
      id: 1,
      title: 'Телефон IPhone 7 розовый',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },
    {
      id: 2,
      title: 'Пауэрбанк серый Xiaomi',
      img: 'https://picsum.photos/210',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Sunt ea eu aliquip incididunt. Quis commodo pariatur sit ut commodo consectetur deserunt eu ad consectetur nisi cupidatat.',
    },
    {
      id: 3,
      title: 'Телефон IPhone X серый',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },
    {
      id: 4,
      title: 'Куртка красная',
      img: 'https://picsum.photos/200',
      date: {
        start: '29.03.2020',
        end: '30.03.2020',
      },
      description: 'Потерял скорее всего на 3 этаже Абылай Хана'
    },
    {
      id: 5,
      title: 'Наушники проводные белые',
      img: 'https://picsum.photos/200',
      date: {
        start: '18.03.2020',
        end: '19.03.2020',
      },
      description: 'Оставила в 446 на последней парте'
    },
  ],
};

export const BEST_TEACHERS = [
  {
    id: 0,
    name: {
      first: 'Оралхан',
      last: 'Гумар',
    },
    avatar: 'https://instagram.fala4-1.fna.fbcdn.net/v/t51.2885-15/e35/67509386_1419857144820350_878421903846524195_n.jpg?_nc_ht=instagram.fala4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=XrX9eqxbdgoAX-gOleA&oh=6fa9449273b3f18455cd8b272483ce94&oe=5EA70144',
    faculty: 'ФИТ',
    yearOfStudy: 2,
    subjects: 'Исчисление 2, Теория Вероятности и Статистика',
    rating: 8,
    quote: 'Научу тебя всему, что знаю сам'

  },
  {
    id: 1,
    name: {
      first: 'Мухаммед',
      last: 'Кайратулы',
    },
    avatar: 'https://instagram.fala4-2.fna.fbcdn.net/v/t51.2885-19/s320x320/67398576_458614811385184_4004831268628856832_n.jpg?_nc_ht=instagram.fala4-2.fna.fbcdn.net&_nc_ohc=v6h1FxUWs70AX-HR5Cq&oh=d80a3acf86e33e7c79e6367c15e585bb&oe=5EA93758',
    faculty: 'ФИТ',
    yearOfStudy: 2,
    subjects: 'PP1, PP2, Web Development',
    rating: 4,
    quote: 'Помогу тебе найти силы в cебе'

  },
  {
    id: 2,
    name: {
      first: 'Даниал',
      last: 'Зинолла',
    },
    avatar: 'https://instagram.fala4-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/61872909_385218112160060_7005694712651870945_n.jpg?_nc_ht=instagram.fala4-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Oa1CgKgtlD8AX-Yx6UQ&oh=ab4f4c0db8d61683b996d027f78748bc&oe=5EA8682F',
    faculty: 'БШ',
    yearOfStudy: 2,
    subjects: 'Web Development, Статистика',
    rating: 10,
    quote: 'Вообще, по идее все изи'

  },
];

export const AUTH_DATA = {};

export const USERS: User[] = [
  new User('jiklopo', '123456', 'Тимур Васильевич', 'jiklopo', 1),
  new User('aggressive_deer', '123456', 'Алиса Весновская', 'alice123', 2,
    new TeacherInfo('fit', 2, 'f', ['Digital Design'], 'Печенье вкуснее с молоком.')),
  new User('thugboykz', '123456', 'Мухаммед Невстровский', 'mukha3000', 3,
    new TeacherInfo('fit', 2, 'm', ['PP1', 'PP2', 'WebDev'], 'Ложка более универсальный инструмент, чем вилка.'))
];