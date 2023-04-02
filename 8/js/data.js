import {
  getRandomArrayElement,
  getRandomInteger,
  generateCommentId,
} from './util.js';

import {
  PICTURE_COUNT,
  AVATAR_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  COMMENT_COUNT,
  COMMENT_LINES,
  DESCRIPTIONS,
  NAMES
} from './constant.js';


// Создание массива случайных сообщений
const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

// Создание объекта с комментарием (id, аватарка, комментарий, имя комментатора)
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// Создание объекта (id, фото, описание, кол-во лайков, массив случайного кол-ва комментариев)
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

// Создание массива объектов
const getPictures = () =>
  Array.from(
    { length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();

export { getPictures };
