export default function appendToEachArrayValue(array, appendString) {
  const arrayTest = [...array];
  for (const element of arrayTest) arrayTest[arrayTest.indexOf(element)] = `${appendString} ${element}`;
  return arrayTest;
}
