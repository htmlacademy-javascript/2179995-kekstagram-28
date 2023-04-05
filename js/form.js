import { isEscapeKey, } from './util.js';
import { ERROR_TAG_TEXT, VALID_SYMBOLS, MAX_HASHTAGS_COUNT } from './constant.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imageOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseOverlay = uploadForm.querySelector('#upload-cancel');
const body = document.querySelector('body');
const fieldHashtags = uploadForm.querySelector('.text__hashtags');
const fieldСomments = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const onEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imageOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadForm.reset();
    pristine.reset();
  }
};

// проверяет кол-во хэштегов
const validHashtagCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

// проверяет уникальность хэштегов
const uniqueHashtag = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// проверяем валидность
const validHashtag = (tag) => VALID_SYMBOLS.test(tag);

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validHashtagCount(tags) && uniqueHashtag(tags) && tags.every(validHashtag);
};

pristine.addValidator(
  fieldHashtags,
  validateTags,
  ERROR_TAG_TEXT
);

const fieldFocus = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onEscape);
  });
};
const fieldBlur = (field) => {
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onEscape);
  });
};

const fieldFocusRemove = (field) => {
  field.removeEventListener('focus', () => {
    document.removeEventListener('keydown', onEscape);
  });
};
const fieldBlurRemove = (field) => {
  field.removeEventListener('blur', () => {
    document.addEventListener('keydown', onEscape);
  });
};

const focus = () => {
  fieldFocus(fieldHashtags);
  fieldBlur(fieldHashtags);
  fieldFocus(fieldСomments);
  fieldBlur(fieldСomments);
};
const focusRemove = () => {
  fieldFocusRemove(fieldHashtags);
  fieldBlurRemove(fieldHashtags);
  fieldFocusRemove(fieldСomments);
  fieldBlurRemove(fieldСomments);
};

const closeImageModal = () => {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscape);
  uploadForm.reset();
  pristine.reset();
  focusRemove();
};
const openImageModal = () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscape);
  buttonCloseOverlay.addEventListener('click', closeImageModal);
  focus();
};

const editImages = () => {
  openImageModal();
};

uploadFile.addEventListener('input', editImages);
