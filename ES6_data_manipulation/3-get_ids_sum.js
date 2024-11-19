export default function getStudentIdsSum(students) {
	// This function will return the sum of all students ID
  return students.reduce((sum, student) => sum + student.id, 0);
}
