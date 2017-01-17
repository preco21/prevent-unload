import {jsdom} from 'jsdom';

const {defaultView} = document;
const {navigator} = window;

global.document = jsdom('<body></body>');
global.window = defaultView;
global.navigator = navigator;

export {};
