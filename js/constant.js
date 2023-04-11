const PICTURES_COUNT = 10;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENTS_PORTION = 5;
const ERROR_TAG_TEXT = 'В хэштегах допущены ошибки'; // сообщение об ошибке при написании хэштегов
const COMMENTS_ERROR_MESSAGE = 'Максимальная длина комментария 140 символов';
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i; // допустимые символы
const MAX_HASHTAGS_COUNT = 5; // макс-ное кол-во хэштегов
const MAX_COMMENTS_LENGTH = 140; // Максимальная длина комментария
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ?!'
];

const DESCRIPTIONS = [
  'Летний чил на югаx. #тай #отдых #лето #чил #travel',
  'Тестим новую камеру! #camera #test #new',
  'Затусили с друзьями на моpе #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood',
  'Отдыхаем… #chill #relax #group #photo',
  'Цените каждое мгновенье.',
  'Вот это тачка! #wow #car #carwow #drive'
];

const NAMES = [
  'Никита',
  'Антон',
  'Анна',
  'Елена',
  'Олег',
  'Артём',
];

// Массив эфектов для фильтров
const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

// Масштабирввание
const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const DEFAULT_VALUE = 100;

// Актуальный адрес сервера
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const ALERT_SHOW_TIME = 5000;

// Задержка повторной отправки (для устранения "дребезга")
const RERENDER_DELAY = 500;

// Массив допустимых расширений
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  PICTURES_COUNT,
  AVATAR_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  COMMENT_COUNT,
  COMMENT_LINES,
  DESCRIPTIONS,
  NAMES,
  COMMENTS_PORTION,
  ERROR_TAG_TEXT,
  COMMENTS_ERROR_MESSAGE,
  VALID_SYMBOLS,
  MAX_HASHTAGS_COUNT,
  MAX_COMMENTS_LENGTH,
  EFFECTS,
  STEP,
  MIN_VALUE,
  MAX_VALUE,
  DEFAULT_VALUE,
  BASE_URL,
  ALERT_SHOW_TIME,
  RERENDER_DELAY,
  FILE_TYPES
};
