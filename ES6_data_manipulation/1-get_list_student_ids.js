export default function getListStudentIds(students) {
	//This function will check if an array is empty or not and then return the ID of students in the array.
	if (students.constructor != Array){
		return [];
	}
	return students.map((student) => student.id);
}
