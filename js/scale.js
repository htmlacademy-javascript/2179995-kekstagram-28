import { STEP, MIN_VALUE, MAX_VALUE, DEFAULT_VALUE } from './constant.js';

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imageUpload = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageUpload.style.transform = `scale(${value / 100})`;
  inputScale.value = `${value}%`;
};

const smallerButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  scaleImage(newValue);
};

const biggerButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  scaleImage(newValue);
};

smallerButton.addEventListener('click', smallerButtonClick);
biggerButton.addEventListener('click', biggerButtonClick);

const resetScale = () => scaleImage(DEFAULT_VALUE);
export { resetScale };
