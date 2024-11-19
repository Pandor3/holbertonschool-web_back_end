export default function getStudentsByLocation(students, city) {
  // This function will return an array of locations
  return students.filter((students) => city === students.location);
}
