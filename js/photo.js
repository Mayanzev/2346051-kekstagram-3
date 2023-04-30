const photosList = document.querySelector('.pictures');
const photosSample = document.querySelector('#picture');

const renderingPhoto = (basicPhotos) => {
  const photoFragment = document.createDocumentFragment();
  for (const element of basicPhotos) {
    const photo = photosSample.cloneNode(true).content;
    photo.querySelector('.picture__img').src = element.url;
    photo.querySelector('.picture__likes').textContent = element.likes;
    photo.querySelector('.picture__comments').textContent = element.comments;
    photoFragment.appendChild(photo);
  }
  photosList.appendChild(photoFragment);
};
export {renderingPhoto};

//Задание 7 часть 2
