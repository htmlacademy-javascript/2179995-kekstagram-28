const PICTURES_COUNT = 10;
const COMMENTS_PORTION = 5;
const ERROR_TAG_TEXT = 'В хэштегах допущены ошибки'; // сообщение об ошибке при написании хэштегов
const COMMENTS_ERROR_MESSAGE = 'Максимальная длина комментария 140 символов';
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i; // допустимые символы
const MAX_HASHTAGS_COUNT = 5; // макс-ное кол-во хэштегов
const MAX_COMMENTS_LENGTH = 140; // Максимальная длина комментария

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

//Время задержки оповещения
const ALERT_SHOW_TIME = 5000;

// Задержка повторной отправки (для устранения "дребезга")
const RERENDER_DELAY = 500;

// Массив допустимых расширений
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  PICTURES_COUNT,
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
