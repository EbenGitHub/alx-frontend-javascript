export default function getListStudentIds(obj) {
  if (obj.constructor !== Array) return [];
  return obj.map((student) => student.id);
}
