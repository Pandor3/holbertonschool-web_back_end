export default function concatArrays(array1, array2, string) {
  const finalarray = [...array1, ...array2, ...string];
  return finalarray;
}
