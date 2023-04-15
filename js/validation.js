import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './messages-form.js';
import { onCloseImageModal } from './form.js';
import { ERROR_TAG_TEXT, COMMENTS_ERROR_MESSAGE, VALID_SYMBOLS, MAX_HASHTAGS_COUNT, MAX_COMMENTS_LENGTH } from './constant.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const fieldHashtagsElement = uploadFormElement.querySelector('.text__hashtags');
const fieldCommentsElement = uploadFormElement.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

// проверяет кол-во хэштегов
const hasValidHashtagCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

// проверяет уникальность хэштегов
const hasUniqueHashtag = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// проверяем валидность
const isValidHashtag = (tag) => VALID_SYMBOLS.test(tag);

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidHashtagCount(tags) && hasUniqueHashtag(tags) && tags.every(isValidHashtag);
};

//Функция по валидации длины комментариев
const validateComments = (value) => value.length <= MAX_COMMENTS_LENGTH;

//Описываем валидацию хэштегов
pristine.addValidator(
  fieldHashtagsElement,
  validateTags,
  ERROR_TAG_TEXT
);
//Описываем валидацию комментариев
pristine.addValidator(
  fieldCommentsElement,
  validateComments,
  COMMENTS_ERROR_MESSAGE
);

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const pristineReset = () => pristine.reset();

const setFormSubmit = () => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    const formData = new FormData(evt.target);
    if (isValid) {
      blockSubmitButton();
      sendData(formData)
        .then(() => {
          onCloseImageModal();
          showSuccessMessage();
        })
        .catch(
          () => {
            showErrorMessage();
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export { pristineReset, setFormSubmit };
