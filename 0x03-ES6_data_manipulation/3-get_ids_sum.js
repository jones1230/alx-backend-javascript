/* eslint-disable no-param-reassign */

export default function getStudentIdsSum(arr) {
  const sumOfIds = arr.reduce((total, arr) => {
    total += arr.id;
    return total;
  }, 0);
  return sumOfIds;
}
