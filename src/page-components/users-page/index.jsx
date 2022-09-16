import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';

function UsersPage() {
  const mockUsers = [
    {
      name: 'Samuel',
      username: 'samueldsr',
    },
    {
      name: 'Risbel',
      username: 'risbelsr',
    },
  ];

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="text-white">
        <Link to="/" className="underline text-lg">
          Go to Home
        </Link>
        <br />
      </div>

      <div className="flex flex-col gap-4 px-2 mt-4 w-full md:w-1/2">
        {mockUsers.map((user) => (
          <div className="bg-gray-200 px-4 py-2 rounded-lg shadow-lg" key={user.username}>
            <Link to={`/users/${user.username}`}>
              <span>{user.name}</span>
              <strong className="ml-2">{user.username}</strong>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default UsersPage;
