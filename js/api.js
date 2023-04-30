import {renderingPhoto} from './photo.js';
import {checkAlert} from './util.js';
import {isSuccess, isFail} from './verification.js';
import {closeWindow} from './form.js';

const getPhotosFromServer = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data').then((response)=> response.json()).then((response)=> renderingPhoto(response)).catch(() => checkAlert('Image upload error!'));
};

const sendPhotosToServer = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow(true);
        isSuccess();
      } else {
        closeWindow(false);
        isFail();
      }
    });
};

export {getPhotosFromServer, sendPhotosToServer};
