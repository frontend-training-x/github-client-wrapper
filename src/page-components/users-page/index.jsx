import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import getUsers from '../../services/list-users';

function UserCard({ userData }) {
  return (
    <div className="bg-gray-200 px-4 py-2 rounded-lg shadow-lg flex flex-col gap-2">
      <span className="text-md">{userData.login}</span>
    </div>
  );
}

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="text-white">
        <Link to="/" className="underline text-lg">
          Go to Home
        </Link>
        <br />
      </div>

      <div className="flex flex-col gap-4 px-2 mt-4 w-full md:w-1/2 pb-8">
        {users.length > 0 // Si hay algún user (si vino de la api)
          && users.map((user) => (
            <Link to={`/users/${user.login}`}>
              <UserCard userData={user} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default UsersPage;
