const increase = document.querySelector('.scale__control--bigger');
const decrease = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');

function setScale(newScaleValue) {
  scaleValue.value=`${newScaleValue}%`;
  preview.style.transform=`scale(${newScaleValue/100})`;
}

decrease.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) > 25) {
    setScale((parseInt(scaleValue.value, 10)) - 25);
  }
});


increase.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) < 100) {
    setScale((parseInt(scaleValue.value, 10)) + 25);
  }
});
