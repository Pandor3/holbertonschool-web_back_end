import getListStudent from './0-get_list_students';

export default function getStudentsByLocation(students, city) {
  // This function will return an array of locations
  return students.filter((student) => city === students.location);
}
