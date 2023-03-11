/*
Module 2
*/

// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

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

// eslint-disable-next-line
checkStringLength('test', 3)

/*
Module 4
*/

const discripitons = ['it is me', 'my family', 'me and my friends', 'my work', 'sunny day'];

function createImgDescription (number) {
  const photos = new Array(number);
  for (let i = 1; i <= photos.length; i++) {
    photos[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      discripiton: discripitons[getRandomPositiveInteger(0, 4)],
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    };
  }
  return photos;
}

// eslint-disable-next-line
createImgDescription(25);
