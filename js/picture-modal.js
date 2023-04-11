import { openBigPicture } from './big-picture.js';
import { renderThumbnail, container } from './thumbnail.js';

let pictures = [];

const modalClick = (evt) => {
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
  container.addEventListener('click', modalClick);
};

// const renderPictureModal = (pictures) => {
//   container.addEventListener('click', (evt) => {
//     const thumbnail = evt.target.closest('[data-thumbnail-id]');
//     if (!thumbnail) {
//       return;
//     }
//     const picture = pictures.find(
//       (item) => item.id === +thumbnail.dataset.thumbnailId
//     );
//     openBigPicture(picture);
//   });
//   renderThumbnail(pictures);
// };

export { renderPictureModal };

