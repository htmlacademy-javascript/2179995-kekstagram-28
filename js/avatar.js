import { imageUploadElement } from './effects.js';
import { uploadFileElement } from './form.js';
import { FILE_TYPES } from './constant.js';

const effectsElement = document.querySelectorAll('.effects__preview');

const loadUserPhoto = () => {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageUploadElement.src = URL.createObjectURL(file);
    effectsElement.forEach((item) => (item.style.backgroundImage = `url('${imageUploadElement.src}')`));
  }
};

export { loadUserPhoto };
