import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import getUserDetails from '../../services/details-user';
import getUsers from '../../services/list-users';

function UserCard({ userData }) {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg flex">
      <Link className="flex" to={`/users/${userData.login}`}>
        <img className="rounded-l-lg w-20 h-22" alt={userData.avatar_url} src={userData.avatar} />
        <div className="bg-gray-100  flex flex-col justify-center  px-2 py-2 gap-3">
          <div className="text-md font-medium">
            <div>
              {userData.type}
              name:
              {userData.login}
            </div>
            <div>{userData.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleSetUsersDetailsData = userData =>
    Promise.all(
      userData.map(async user => {
        const userDetails = await getUserDetails(user.login);

        return {
          ...user,
          name: userDetails.name || ' ',
          avatar: userDetails.avatar_url,
        };
      }),
    );

  useEffect(() => {
    getUsers().then(data => handleSetUsersDetailsData(data).then(newData => setUsers(newData)));
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap">
        {users.length > 0 &&
          users.map(
            (
              user, // Si hay algún user (si vino de la api)
            ) => (
              <div key={user.id} className="flex mx-2 my-3">
                <UserCard key={user.id} userData={user} />
              </div>
            ),
          )}
      </div>
    </div>
  );
}

export default UsersPage;
