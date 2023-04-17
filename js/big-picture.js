import { isEscapeKey, } from './util.js';
import './thumbnail.js';
import { COMMENTS_PORTION } from './constant.js';

const bigPictureElement = document.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const listCommentsElement = document.querySelector('.social__comments');
const itemListCommentElement = listCommentsElement.querySelector('.social__comment');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsShowCountElement = commentCountElement.querySelector('.comments-shown');
const allCommentsCountElement = commentCountElement.querySelector('.comments-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
let allComments;
let commentsShow = 0;

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    commentsShow = 0;
    allComments = [];
  }
};

const createComment = ({ avatar, message, name }) => {
  const comment = itemListCommentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};


const renderComments = (arrayComment) => {
  listCommentsElement.innerHTML = '';
  const commentFragment = document.createDocumentFragment();
  commentFragment.append(...arrayComment.map(createComment));
  listCommentsElement.append(commentFragment);

};
const loadComments = () => {
  commentsShow += COMMENTS_PORTION;

  if (commentsShow >= allComments.length) {
    commentsShow = allComments.length;
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const nextComments = allComments.slice(0, commentsShow);
  renderComments(nextComments);

  commentsShowCountElement.textContent = commentsShow;
  allCommentsCountElement.textContent = allComments.length;
};

const onCommentsLoaderButtonClick = () => loadComments();

const renderBigPicture = ({ url, likes, comments, description }) => {
  bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  listCommentsElement.innerHTML = '';
  allComments = comments;
  loadComments();
};

const onCloseBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  closeButtonElement.removeEventListener('click', onCloseBigPicture);
  document.removeEventListener('keydown', onPopupEscKeydown);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderButtonClick);
  commentsShow = 0;
  allComments = [];
};

const openBigPicture = (picture) => {
  bigPictureElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  closeButtonElement.addEventListener('click', onCloseBigPicture);
  document.addEventListener('keydown', onPopupEscKeydown);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderButtonClick);

  renderBigPicture(picture);
};

export { openBigPicture };
