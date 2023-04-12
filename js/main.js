/* jshint esversion: 10 */
import { renderPictureModal } from './picture-modal.js';
import './form.js';
import { setFormSubmit } from './validation.js';
import { closeImageModal } from './form.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { getFilteredPictures, init } from './filter.js';
import './avatar.js';
import { RERENDER_DELAY } from './constant.js';

getData()
  .then((data) => {
    const debouncedRenderGallery = debounce(renderPictureModal, RERENDER_DELAY);
    init(data, debouncedRenderGallery);
    renderPictureModal(getFilteredPictures());
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit(closeImageModal);

