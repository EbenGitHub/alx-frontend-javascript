export default function cleanSet(set, startString) {
  const startSet = [];
  if (
    set.constructor === Set
    && startString.constructor === String
    && startString
  ) {
    set.forEach((s) => {
      if (s.startsWith(startString)) startSet.push(s.slice(startString.length));
    });
  }

  return startSet.join('-');
}
