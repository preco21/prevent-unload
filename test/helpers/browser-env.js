import {jsdom} from 'jsdom';

const jsdomDocument = jsdom('<body></body>');
const {defaultView: window} = jsdomDocument;
const {navigator} = window;

global.document = jsdomDocument;
global.window = window;
global.navigator = navigator;

export {};
