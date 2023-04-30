import {checkStringLength} from './util.js';
import './photo.js';
import './form.js';
import './validation.js';
import './scale.js';
import './effects.js';
import {getPhotosFromServer} from './api.js';

// eslint-disable-next-line
checkStringLength('test', 3);

// eslint-disable-next-line
getPhotosFromServer();
