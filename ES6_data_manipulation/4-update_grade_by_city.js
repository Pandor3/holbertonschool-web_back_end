export default function updateStudentGradeByCity(students, city, newGrades) {
  // This function will return students by cities with a grade
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',

      };
    });
}
