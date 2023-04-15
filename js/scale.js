import { STEP, MIN_VALUE, MAX_VALUE, DEFAULT_VALUE } from './constant.js';

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const inputScaleElement = document.querySelector('.scale__control--value');
const imageUploadElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageUploadElement.style.transform = `scale(${value / 100})`;
  inputScaleElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(inputScaleElement.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(inputScaleElement.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  scaleImage(newValue);
};

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

const resetScale = () => scaleImage(DEFAULT_VALUE);
export { resetScale };
