import httpService from './config';

export default async function getUsersDetails(username) {
  return httpService(`/users/${username}`).then((e) => e.json());
}
