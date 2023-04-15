import { isEscapeKey, } from './util.js';
import { pristineReset } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
//import { loadUserPhoto } from './avatar.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileElement = uploadFormElement.querySelector('#upload-file');
const imageOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const buttonCloseOverlayElement = uploadFormElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');
const fieldHashtagsElement = uploadFormElement.querySelector('.text__hashtags');
const fieldCommentsElement = uploadFormElement.querySelector('.text__description');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseImageModal();
  }
};

const deleteEscKeydownForHash = () => {
  fieldHashtagsElement.addEventListener('focus', () => {
    document.removeEventListener('keydown', onModalEscKeydown);
  });

  fieldHashtagsElement.addEventListener('blur', () => {
    document.addEventListener('keydown', onModalEscKeydown);
  });
};

const deleteEscKeydownForTextField = () => {
  fieldCommentsElement.addEventListener('focus', () => {
    document.removeEventListener('keydown', onModalEscKeydown);
  });

  fieldCommentsElement.addEventListener('blur', () => {
    document.addEventListener('keydown', onModalEscKeydown);
  });
};

function onCloseImageModal() {
  imageOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  buttonCloseOverlayElement.removeEventListener('click', onCloseImageModal);
  uploadFormElement.reset();
  pristineReset();
  resetScale();
  resetEffects();
}


const openImageModal = () => {
  imageOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  document.body.style.overflowY = 'hidden'; // Помогает убрать двойной scroll
  buttonCloseOverlayElement.addEventListener('click', onCloseImageModal);
  deleteEscKeydownForTextField();
  deleteEscKeydownForHash();
  //loadUserPhoto();
};


const editImages = () => {
  openImageModal();
};

uploadFileElement.addEventListener('input', editImages);
buttonCloseOverlayElement.addEventListener('click', onCloseImageModal);
export { onCloseImageModal, onModalEscKeydown, uploadFileElement };

