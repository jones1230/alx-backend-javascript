/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const cleanSet = [...set];
  return cleanSet.filter((val) => {
    if (val.startsWith(startString)) return val;
  }).map((value) => {
    if (value.split(startString)[1] !== undefined) {
      value = value.split(startString)[1];
    }
    return value;
  }).reduce((total, current) => {
    total += `-${current}`;
    return total;
  });
}
