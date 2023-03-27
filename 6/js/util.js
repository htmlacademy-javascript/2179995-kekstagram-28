// Получение случайного идентификатора
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного элемента массива
const getRandomArrayElement = (Array) =>
  Array[getRandomInteger(0, Array.length - 1)];


// Создание идентификатора с увеличением на единицу
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
const generateCommentId = createIdGenerator();


export {
  getRandomArrayElement,
  getRandomInteger,
  generateCommentId
};
