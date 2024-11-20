export default function getResponseFromAPI() {
  const MyPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
  return MyPromise;
}
