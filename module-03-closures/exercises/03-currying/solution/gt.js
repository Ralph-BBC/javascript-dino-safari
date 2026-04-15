import { curry } from './curry.js';

export const gt = curry((threshold, value) => value > threshold);
