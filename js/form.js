import {resetEffect} from './effects.js';

document.querySelector('#upload-file').addEventListener('change', () => {
  openWindow();
});

document.querySelector('#upload-cancel').addEventListener('click', () => {
  closeWindow(true);
});

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow(true);
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function cleanForm() {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
  document.querySelector('.scale__control--value').value = '100%';
}

function closeWindow(necessaryClean) {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  document.querySelector('#upload-file').value = '';
  if (necessaryClean) {
    cleanForm();
  }
}

export {closeWindow};
