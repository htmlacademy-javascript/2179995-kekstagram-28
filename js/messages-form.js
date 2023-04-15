import { isEscapeKey } from './util.js';
import { onModalEscKeydown } from './form.js';

const messageErrorElement = document.querySelector('#error').content.querySelector('.error');
const messageSuccessElement = document.querySelector('#success').content.querySelector('.success');

const onCloseErrorMessage = () => {
  document.removeEventListener('keydown', onEscapeError);
  const errorContainer = document.querySelector('.error');
  if (errorContainer) {
    errorContainer.remove();
    document.addEventListener('keydown', onModalEscKeydown);
  }
};

const onErrorMouseClick = (evt) => {
  const errorContainer = document.querySelector('.error__inner');
  if (evt.target !== errorContainer) {
    onCloseErrorMessage();
  }
};

const showErrorMessage = () => {
  const message = messageErrorElement.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', onCloseErrorMessage);
  document.addEventListener('keydown', onEscapeError);
  document.addEventListener('click', onErrorMouseClick, { once: true });
  document.removeEventListener('keydown', onModalEscKeydown);
  document.body.append(message);
};

function onEscapeError(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseErrorMessage();
  }
}

const onCloseSuccessMessage = () => {
  document.removeEventListener('keydown', onEscapeSuccess);
  const successContainer = document.querySelector('.success');
  if (successContainer) {
    successContainer.remove();
  }
};

const onSuccessMouseClick = (evt) => {
  const successContainer = document.querySelector('.success__inner');
  if (evt.target !== successContainer) {
    onCloseSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const message = messageSuccessElement.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', onCloseSuccessMessage);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click', onSuccessMouseClick, { once: true });
  document.body.append(message);
};

function onEscapeSuccess(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseSuccessMessage();
  }
}

export { showErrorMessage, showSuccessMessage };
