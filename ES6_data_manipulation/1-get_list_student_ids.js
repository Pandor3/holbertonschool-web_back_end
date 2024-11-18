export default function getListStudentIds(students) {
  // This function will check if an array is empty or not and return the id of students.
  if (students.constructor !== Array) {
    return [];
  }

  return students.map((student) => student.id);
}
