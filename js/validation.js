import { sendPhotosToServer } from './api.js';

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Comment length from 20 to 140 characters');

function validateComment(element) {
  return element.length >= 20 && element.length <= 140;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendPhotosToServer(evt);
  }
});
