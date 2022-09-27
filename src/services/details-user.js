import httpService from './config';

export default async function getUserDetails(username) {
  return httpService(`/users/${username}`).then((e) => e.json());
}
