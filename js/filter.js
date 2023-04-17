import { PICTURES_COUNT } from './constant.js';

const filterElement = document.querySelector('.img-filters');
const filtersFormElement = document.querySelector('.img-filters__form');
const filterButtonsElement = filtersFormElement.querySelectorAll('.img-filters__button');

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (callback) => {
  filtersFormElement.addEventListener('click', (evt) => {
    filterButtonsElement.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    callback(getFilteredPictures());
  });
};

const init = (loadedPictures, cb) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(cb);
};

export { getFilteredPictures, init, setOnFilterClick };
