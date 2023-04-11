/* jshint esversion: 10 */
import { renderPictureModal } from './picture-modal.js';
import './form.js';
import { setFormSubmit, closeImageModal } from './form.js';
import { showAlert, debounce } from './util.js';
import { getData, sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './messages-form.js';
import { getFilteredPictures, init } from './filter.js';
import './avatar.js';


setFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeImageModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debounceRenderPictureModal = debounce(renderPictureModal);
  init(data, debounceRenderPictureModal);
  renderPictureModal(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}

