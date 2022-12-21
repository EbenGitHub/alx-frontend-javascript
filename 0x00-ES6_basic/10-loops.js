export default function appendToEachArrayValue(array, appendString) {
  // for loop 
	for (const value of array) {
    // arr reassn
		array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
