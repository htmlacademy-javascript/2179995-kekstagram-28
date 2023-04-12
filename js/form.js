import { isEscapeKey, } from './util.js';
import { pristineReset } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imageOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseOverlay = uploadForm.querySelector('#upload-cancel');
const body = document.querySelector('body');
const fieldHashtags = uploadForm.querySelector('.text__hashtags');
const fieldСomments = uploadForm.querySelector('.text__description');

const onEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageModal();
  }
};

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

function closeImageModal() {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscape);
  uploadForm.reset();
  pristineReset();
  focusRemove();
  resetScale();
  resetEffects();
}
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

export { closeImageModal, onEscape, uploadFile };

