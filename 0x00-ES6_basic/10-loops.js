export default function appendToEachArrayValue(array, appendString) {
  const arrayTest = [...array];
  for (const element of array) {
    arrayTest[array.indexOf(element)] = `${appendString} ${element}`;
  }
  return arrayTest;
}
