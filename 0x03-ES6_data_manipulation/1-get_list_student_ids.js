export default function getListStudentIds(getListStudents) {
  if (getListStudents.constructor !== Array) return [];
  return getListStudents.map((student) => student.id);
}
