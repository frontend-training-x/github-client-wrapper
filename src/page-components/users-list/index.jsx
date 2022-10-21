import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Pagination from '../../components/pagination';
import getAmountOfUsers from '../../services/get-amount-of-users';
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
  const [query] = useSearchParams();
  const page = Number(query.get('page'));
  const [users, setUsers] = useState([]);
  const [usersAmount, setUsersAmount] = useState(null);
  const count = usersAmount && Math.ceil(usersAmount / 30);
  const since = (page - 1) * 30;

  useEffect(() => {
    getUsers({ page }).then(data => setUsers(data));
    getAmountOfUsers().then(data => setUsersAmount(data.total_count));
  }, [query]);

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
      {count && (
        <div className="my-8 flex flex-wrap justify-between items-center bg-white border-t-2 border-gray-800 px-4 py-4 overflow-x-scroll">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{since}</span> to <span className="font-medium">{since + 30}</span>{' '}
              of <span className="font-medium">{usersAmount}</span> results
            </p>
          </div>
          <Pagination page={page} count={count} baseUrl="/users" />
        </div>
      )}
    </div>
  );
}

export default UsersPage;
