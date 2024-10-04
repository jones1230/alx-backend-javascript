/* eslint-disable no-underscore-dangle */

import HolbertonCourse from './2-hbtn_course';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);
