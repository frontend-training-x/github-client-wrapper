import httpService from './config';

export default async function getUsers() {
  return httpService('/users').then((e) => e.json());
}
