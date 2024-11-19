import getListStudent from './0-get_list_students';

export default function getStudentsByLocation() {
  // This function will return an array of locations
	const students = getListStudent();

  return students.filter((student) => student.location == 'San Francisco');
}
