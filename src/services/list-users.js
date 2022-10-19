import httpService from './config';

export default async function getUsers(since) {
  return httpService(`/users?since=${since}&per_page=30`).then(e => e.json());
}
