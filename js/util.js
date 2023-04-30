// Случайное целое число
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Проверка максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

const checkAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '15px';
  alertContainer.style.top = '15px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.fontFamily = 'Times New Roman';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
};

export {getRandomPositiveInteger, checkStringLength, checkAlert};
