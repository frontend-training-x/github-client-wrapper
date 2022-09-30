import httpService from './config';

export default async function getUsersRepos(username) {
  return httpService(`/users/${username}/repos`).then((e) => e.json());
}
