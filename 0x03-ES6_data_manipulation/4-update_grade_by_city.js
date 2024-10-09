/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((obj) => {
    if (obj.location === city) return obj;
  }).map((obj) => {
    for (const newGrade in newGrades) {
      if (obj.id === newGrades[newGrade].studentId) {
        obj.grade = newGrades[newGrade].grade;
      }
      if (obj.grade === undefined) obj.grade = 'N/A';
    }
    return obj;
  });
}
