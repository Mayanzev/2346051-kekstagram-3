document.querySelector('#upload-file').addEventListener('change', () => {
  openWindow();
});

document.querySelector('#upload-cancel').addEventListener('click', () => {
  closeWindow();
});

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function cleanForm() {
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}
