/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

export default function getListStudentsByLocation(arr, city) {
  return arr.filter((arr) => {
    if (arr.location === city) {
      return arr;
    }
  });
}
