import {jsdom} from 'jsdom';

const document = jsdom('<body></body>');
const {defaultView: window} = document;
const {navigator} = window;

global.document = document;
global.window = window;
global.navigator = navigator;

export {};
