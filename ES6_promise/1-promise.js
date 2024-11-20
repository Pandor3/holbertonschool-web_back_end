export default function getFullResponseFromAPI(success) {
  const MyPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('<rejected> Error: The fake API is not working currently'));
    }
  });
  return MyPromise;
}
