import { EFFECTS } from './constant.js';

const imageUpload = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const effectSlider = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const openSlider = () => {
  sliderWrapper.classList.remove('hidden');
};

const closeSlider = () => {
  sliderWrapper.classList.add('hidden');
};

const updateSlider = () => {
  effectSlider.noUiSlider.updateOptions(
    {
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max
      },
      step: chosenEffect.step,
      start: chosenEffect.max
    });

  if (isDefault()) {
    closeSlider();
  } else {
    openSlider();
  }
};

const effectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageUpload.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = effectSlider.noUiSlider.get();

  if (isDefault()) {
    imageUpload.style.filter = DEFAULT_EFFECT.style;
  } else {
    imageUpload.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }

  effectLevel.value = sliderValue;
};

noUiSlider.create(effectSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

closeSlider();

effects.addEventListener('change', effectsChange);
effectSlider.noUiSlider.on('update', onUpdateSlider);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

export { resetEffects, imageUpload };
