import httpService from './config';

export default async function getAmountOfUsers() {
  return httpService('/search/users?q=type%3Auser').then(e => e.json());
}
