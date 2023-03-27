// Шаблон изображения и его содержимое
const thumbnailTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
// Контейнер для шаблона
const container = document.querySelector('.pictures');

// Создание миниатюры
const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url; // Путь к миниатюре
  thumbnail.querySelector('.picture__img').alt = description; // Текстовое описание миниатюры
  thumbnail.querySelector('.picture__likes').textContent = likes; // Кол-во лайков
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  // comments выведет массивы,если хотим видеть кол-во комментариев, то нужно указать длинну массива с комментариями.

  return thumbnail;

};

// Принимает сгенерированные объекты
const renderThumbnail = (pictures) => {
  const fragment = document.createDocumentFragment(); // Создание "коробки"
  pictures.forEach((picture) => { // Перебор массива
    const thumbnail = createThumbnail(picture); // Создание миниатюры для каждого элемента
    fragment.append(thumbnail); // Добавляет миниатюры в фрагмент ("коробку")
  });
  container.append(fragment); // Добавляет фрагмент в контейнер
};


export { renderThumbnail };
