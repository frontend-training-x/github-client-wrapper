import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUserDetails from '../../services/details-user';

import Navbar from '../../components/navbar/navbar';
import getUsersRepos from '../../services/repos-user';
import { MapPinIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';

function RepoContainer({ repo }) {
  return (
    <div className="border-solid border-2 rounded-md my-4 mx-4 px-2 py-2">
      <div className="flex flex-wrap">
        <div>
          <div className="text-xl text-sky-700 font-semibold mr-4">
            {repo.name}
          </div>
        </div>
        <div className="text-xs border border-solid border-gray-400 rounded-full bg-white text-center px-2 py-1">
          {repo.visibility}
        </div>
      </div>
      <div className="text-sm text-gray-700">
        {repo.description}
      </div>
      <div className="flex flex-wrap space-x-4 text-sm text-gray-700">
        <div className="font-semibold text-gray-800">
          {repo.language}
        </div>
        <div className="flex">
          <StarIcon className="h-5 w-5 text-black mr-1" />
          {repo.stargazers_count}
        </div>
      </div>

    </div>
  );
}

function UserRepos({ username }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    getUsersRepos(username).then((data) => setRepos(data));
  }, []);

  return (
    <div>
      {
        repos !== null
        && repos.map((repo) => (
          <div key={repo.id}>
            <RepoContainer repo={repo} />
          </div>
        ))
      }
    </div>
  );
}

function UserDetails({ users }) {
  return (
    <div className="grid grid-cols-3 my-4">
      <div className="col-start-2 justify-items-center">
        <img className="rounded-full border-solid border-gray-200 border-x-8" src={users.avatar_url} alt={users.name} />
      </div>
      <div className="col-start-2 text-center text-xl">{users.name}</div>
      <div className="col-start-2 text-center">{users.login}</div>
      <div className="col-start-1 mt-4 mx-4">
        <div className="mx-2 my-4">
          {users.bio}
        </div>
        <div className="flex flex-wrap">
          <UsersIcon className="h-6 w-6 mr-1" />
          Fallowers:
          {' '}
          <div className="font-semibold mx-1">
            {users.followers}
          </div>
          /
          Following:
          <div className="font-semibold mx-1">
            {users.following}
          </div>
        </div>
        <div className="flex">
          <MapPinIcon className="h-6 w-6 mr-1" />
          {users.location}
        </div>
      </div>
      <div className="col-start-2 col-span-2 mt-4">
        <div className="ml-4">
          Repos:
          <div className="flex">
            Public repos:
            <dir className="font-semibold px-1 my-0">
              {users.public_repos}
            </dir>
          </div>
          <div className="flex">
            Public gists:
            <dir className="font-semibold px-1 my-0">
              {users.public_gists}
            </dir>
          </div>
        </div>
        <UserRepos username={users.login} />
      </div>
    </div>
  );
}

function UserPage() {
  const { username } = useParams();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUserDetails(username).then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-violet-300">
      <Navbar />
      {
      users !== null
      && <UserDetails users={users} />
      }
    </div>
  );
}

export default UserPage;
