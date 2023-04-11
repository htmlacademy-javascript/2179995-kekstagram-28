import { openBigPicture } from './big-picture.js';
import { renderThumbnail, container } from './thumbnail.js';

let pictures = [];

const renderPictures = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  openBigPicture(picture);
};

const renderPictureModal = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnail(pictures);
  container.addEventListener('click', renderPictures);
};

export { renderPictureModal };

