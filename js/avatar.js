import { imageUpload } from './effects.js';
import { uploadFile } from './form.js';
import { FILE_TYPES } from './constant.js';

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageUpload.src = URL.createObjectURL(file);
  }
});
