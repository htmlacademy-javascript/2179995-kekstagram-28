import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './messages-form.js';
import { closeImageModal } from './form.js';
import { ERROR_TAG_TEXT, COMMENTS_ERROR_MESSAGE, VALID_SYMBOLS, MAX_HASHTAGS_COUNT, MAX_COMMENTS_LENGTH } from './constant.js';

const uploadForm = document.querySelector('.img-upload__form');
const fieldHashtags = uploadForm.querySelector('.text__hashtags');
const fieldСomments = uploadForm.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

// проверяет кол-во хэштегов
const validHashtagCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

// проверяет уникальность хэштегов
const uniqueHashtag = (tags) => {
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
  return validHashtagCount(tags) && uniqueHashtag(tags) && tags.every(isValidHashtag);
};

//Функция по валидации длины комментариев
const validateComments = (value) => value.length <= MAX_COMMENTS_LENGTH;

//Описываем валидацию хэштегов
pristine.addValidator(
  fieldHashtags,
  validateTags,
  ERROR_TAG_TEXT
);
//Описываем валидацию комментариев
pristine.addValidator(
  fieldСomments,
  validateComments,
  COMMENTS_ERROR_MESSAGE
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const pristineReset = () => pristine.reset();

const setFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    const formData = new FormData(evt.target);
    if (isValid) {
      blockSubmitButton();
      sendData(formData)
        .then(() => {
          closeImageModal();
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
