import { curry } from './curry.js';

export const prop = curry((key, obj) => obj[key]);
