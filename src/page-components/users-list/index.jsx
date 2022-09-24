import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import httpService from '../../services/config';
import getUsers from '../../services/list-users';

function UserCard({ userData }) {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg flex">
      <Link className="flex" to={`/users/${userData.login}`}>
        <img className="rounded-l-lg w-20 h-22" alt={userData.avatar_url} src={userData.avatar_url} />
        <div className="bg-gray-100  flex flex-col justify-center  px-2 py-2 gap-3">
          <div className="text-md font-medium">
            <div>
              {userData.type}
              {' '}
              name:
              {' '}
              {userData.login}
            </div>
            <div>
              {userData.name}
            </div>
          </div>
        </div>
      </Link>
      <div className="text-md font-medium mx-2 px-2 py-2  bg-blue-300 shadow-lg flex flex-col">
        <div>
          Location:
          {' '}
          {userData.location}
        </div>
        <div>
          Followers:
          {' '}
          {userData.followers}
        </div>
        <div>
          Fallowing:
          {' '}
          {userData.following}
        </div>
      </div>
    </div>
  );
}

const getUserDetails = (username) => httpService(`/users/${username}`).then((e) => e.json());

function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleSetUsersDetailsData = (userData) => Promise.all(
    userData.map(async (userData) => {
      const userDetails = await getUserDetails(userData.login);

      return {
        ...userData,
        followers: userDetails.followers || 0,
        following: userDetails.following || 0,
        location: userDetails.location || 'Reserved',
        name: userDetails.name || ' ',
      };
    }),
  );

  useEffect(() => {
    getUsers().then((data) => handleSetUsersDetailsData(data).then((newData) => setUsers(newData)));
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap">
        {users.length > 0 && users.map((user) => (// Si hay algún user (si vino de la api)
          <div key={user.id} className="flex mx-2 my-3">
            <UserCard userData={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
