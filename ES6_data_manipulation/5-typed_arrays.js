export default function createInt8TypedArray(length, position, value) {
  // This function will create a new typed array
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  int8[position] = value;
  return buffer;
}
