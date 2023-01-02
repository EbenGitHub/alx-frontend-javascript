export default function cleanSet(set, startString) {
  const startSet = [];
  if (startString === '') return '';

  set.forEach((s) => {
    if (s.startsWith(startString)) startSet.push(s.slice(startString.length));
  });

  return startSet.join('-');
}
