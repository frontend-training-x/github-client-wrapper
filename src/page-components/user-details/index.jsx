import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUsersDetails from '../../services/details-user';

import Navbar from '../../components/navbar/navbar';

function UserPage() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails(username).then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-violet-300">
      <Navbar />
      <div className="grid grid-cols-3 my-4 justify-items-center">
        <img className="col-start-2 rounded-full border-solid border-gray-200 border-x-8" src={users.avatar_url} alt={users.name} />
        <div className="col-start-2 text-center text-xl">{users.name}</div>
        <div className="col-start-2 text-center">{users.login}</div>
        <div className="col-start-1 text-center mt-4">
          Public repos:
          {' '}
          {users.public_repos}
        </div>
        <div className="col-start-1 text-center">
          Public gists:
          {' '}
          {users.public_gists}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
