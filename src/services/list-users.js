import httpService from './config';

export default async function getUsers({ page = 1 } = {}) {
  if (page <= 0) {
    throw new Error('Page should be >= 0.');
  }

  const since = (page - 1) * 30;
  return httpService(`/users?since=${since}&page=30`).then(e => e.json());
}
