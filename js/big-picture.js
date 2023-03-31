import { isEscapeKey, } from './util.js';
import './thumbnail.js';


const bigPicture = document.querySelector('.big-picture'); // модальное окно с полным изображением
const closeButton = bigPicture.querySelector('.big-picture__cancel'); // кнопка закрытия ("крестик") модального окна
const listComments = document.querySelector('.social__comments');
const itemListComment = listComments.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');


const onEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const renderComment = (arrayComment) => {
  listComments.innerHTML = '';
  const commentFragment = document.createDocumentFragment();
  arrayComment.forEach(({ avatar, name, message }) => {
    const comment = itemListComment.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.append(comment);
  });
  listComments.append(commentFragment);
};

const renderBigPicture = ({ url, likes, comments, description }) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  renderComment(comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);

  renderBigPicture(picture);
};

export { openBigPicture };
