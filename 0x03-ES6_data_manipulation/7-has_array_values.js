/* eslint-disable guard-for-in */

export default function hasValuesFromArray(set, array) {
  for (const arr in array) {
    if (set.has(array[arr]) === false) {
      return false;
    }
  }
  return true;
}
