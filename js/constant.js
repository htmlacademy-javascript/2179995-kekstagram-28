const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENTS_PORTION = 5;
const ERROR_TAG_TEXT = 'В хэштегах допущены ошибки';
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_COUNT = 5;
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
export {
  PICTURE_COUNT,
  AVATAR_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  COMMENT_COUNT,
  COMMENT_LINES,
  DESCRIPTIONS,
  NAMES,
  COMMENTS_PORTION,
  ERROR_TAG_TEXT,
  VALID_SYMBOLS,
  MAX_HASHTAGS_COUNT
};
