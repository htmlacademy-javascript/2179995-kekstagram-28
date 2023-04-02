import { openBigPicture } from './big-picture.js';
import { renderThumbnail, container } from './thumbnail.js';

const renderPictureModal = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    openBigPicture(picture);
  });
  renderThumbnail(pictures);
};

export { renderPictureModal };

