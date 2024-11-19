export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }

  const NewArray = new Set(array);
  return NewArray;
}
