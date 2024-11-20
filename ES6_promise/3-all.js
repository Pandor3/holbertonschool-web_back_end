import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${PhotoResult.body} ${UserResult.firstName} ${UserResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
