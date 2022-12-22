export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify attribute types during obj creation
    if (name.constructor !== String) throw TypeError('name must be a string');
    if (length.constructor !== Number) throw TypeError('length must be a number');
    if (students.constructor !== Array) throw TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (student.constructor !== String) throw TypeError('students must be an array of strings');
    });

    // Create objs
    this._name = name;
    this._length = length;
    this._students = students;
  }


  // Setters
  set name(name) {
    if (name.constructor !== String) throw TypeError('name must be a string');
    this._name = name;
  }

  set length(newLen) {
    if (length.constructor !== Number) throw TypeError('length must be a number');
    this._length = newLen;
  }

  set students(newStudents) {
    if (students.constructor !== Array) throw TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (student.constructor !== String) throw TypeError('students must be an array of strings');
    });
    this._students = newStudents;
  }


  // Getters

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
