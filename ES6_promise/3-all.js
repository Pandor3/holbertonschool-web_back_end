import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const PhotoResult = responses[0];
      const UserResult = responses[1];
      console.log(`${PhotoResult.body} ${UserResult.firstName} ${UserResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
