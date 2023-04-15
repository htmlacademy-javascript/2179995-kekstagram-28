import { EFFECTS } from './constant.js';

const imageUploadElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const effectSliderElement = document.querySelector('.effect-level__slider');
const sliderWrapperElement = document.querySelector('.img-upload__effect-level');
const effectLevelElement = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const openSlider = () => {
  sliderWrapperElement.classList.remove('hidden');
};

const closeSlider = () => {
  sliderWrapperElement.classList.add('hidden');
};

const updateSlider = () => {
  effectSliderElement.noUiSlider.updateOptions(
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

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageUploadElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = effectSliderElement.noUiSlider.get();

  if (isDefault()) {
    imageUploadElement.style.filter = DEFAULT_EFFECT.style;
  } else {
    imageUploadElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }

  effectLevelElement.value = sliderValue;
};

noUiSlider.create(effectSliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

closeSlider();

effectsElement.addEventListener('change', onEffectsChange);
effectSliderElement.noUiSlider.on('update', onUpdateSlider);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

export { resetEffects, imageUploadElement };
