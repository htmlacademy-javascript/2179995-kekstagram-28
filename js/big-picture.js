import { isEscapeKey, } from './util.js';
import './thumbnail.js';
import { COMMENTS_PORTION } from './constant.js';

const bigPicture = document.querySelector('.big-picture'); // модальное окно с полным изображением
const closeButton = bigPicture.querySelector('.big-picture__cancel'); // кнопка закрытия ("крестик") модального окна
const listComments = document.querySelector('.social__comments');
const itemListComment = listComments.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
let allComments;
let commentsShow = 0;


const onEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsShow = 0;
    allComments = [];
  }
};


const renderComments = (arrayComment) => {
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


const loadComments = () => {
  const nextComments = allComments.slice(commentsShow, commentsShow + COMMENTS_PORTION);
  commentsShow += nextComments.length;
  renderComments(nextComments);

  if (commentsShow >= allComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentCount.innerHTML = `${commentsShow} из <span class="comments-count"> ${allComments.length}</span> комментариев`;
};


const renderBigPicture = ({ url, likes, comments, description }) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  listComments.innerHTML = '';
  allComments = comments;
  loadComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);
  commentsLoader.removeEventListener('click', loadComments);
  commentsShow = 0;
  allComments = [];
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);
  commentsLoader.addEventListener('click', loadComments);

  renderBigPicture(picture);
};

export { openBigPicture };
