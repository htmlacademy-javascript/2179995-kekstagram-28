// Шаблон изображения и его содержимое
const thumbnailTemplateElement = document.querySelector('#picture')
  .content.querySelector('.picture');
// Контейнер для шаблона
const containerElement = document.querySelector('.pictures');

// Создание миниатюры
const createThumbnail = ({ url, description, likes, comments, id }) => {
  const thumbnail = thumbnailTemplateElement.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url; // Путь к миниатюре
  thumbnail.querySelector('.picture__img').alt = description; // Текстовое описание миниатюры
  thumbnail.querySelector('.picture__likes').textContent = likes; // Кол-во лайков
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  // comments выведет массивы,если хотим видеть кол-во комментариев, то нужно указать длинну массива с комментариями.
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;

};

// Принимает сгенерированные объекты
const renderThumbnail = (pictures) => {
  containerElement.querySelectorAll('.picture').forEach((picture) => picture.remove());
  const fragment = document.createDocumentFragment(); // Создание "коробки"
  pictures.forEach((picture) => { // Перебор массива
    const thumbnail = createThumbnail(picture); // Создание миниатюры для каждого элемента
    fragment.append(thumbnail); // Добавляет миниатюры в фрагмент ("коробку")
  });
  containerElement.append(fragment); // Добавляет фрагмент в контейнер
};

export { renderThumbnail, containerElement };
