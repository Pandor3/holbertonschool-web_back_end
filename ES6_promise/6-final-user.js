import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return result.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
  }));
}
