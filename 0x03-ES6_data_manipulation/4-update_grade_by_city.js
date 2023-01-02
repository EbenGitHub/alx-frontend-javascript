export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {id: student.id, firstName: student.firstName, location: student.location, grade: })
}
