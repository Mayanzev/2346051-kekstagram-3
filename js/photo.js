import {createImgDescriptions} from './data.js';

const photoFragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');
const photosSample = document.querySelector('#picture');
const basicPhotos = createImgDescriptions(25);

for (const element of basicPhotos) {
  const photo = photosSample.cloneNode(true).content;
  photo.querySelector('picture__img').src = element.url;
  photo.querySelector('picture__likes').textContent = element.likes;
  photo.querySelector('picture__comments').textContent = element.comments;
  photoFragment.appendChild(photo);
}
photosList.appendChild(photoFragment);
