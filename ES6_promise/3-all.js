import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  if (Promise.resolve) {
    console.log({ body: 'firstName lastName' });
  } else {
    console.log('Signup system offline');
  }
}
