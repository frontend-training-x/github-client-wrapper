import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Pagination from '../../components/pagination';
import getUsers from '../../services/list-users';

function UserCard({ userData }) {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg flex">
      <Link className="flex" to={`/users/${userData.login}`}>
        <img className="rounded-l-lg w-20 h-22" alt={userData.node_id} src={userData.avatar_url} />
        <div className="bg-gray-100  flex flex-col justify-center  px-2 py-2 gap-3">
          <div className="text-md font-medium">
            <div>id: {userData.id}</div>
            <div>
              {userData.type}
              name: {userData.login}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(data => setUsers(data));
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
      <div className="my-8 flex flex-wrap justify-between items-center bg-white border-t-2 border-gray-800 px-4 py-4">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">30</span> of{' '}
            <span className="font-medium">100</span> results
          </p>
        </div>
        <Pagination page={1} count={100} />
      </div>
    </div>
  );
}

export default UsersPage;
