import { Link, Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar';

function UsersPage() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="text-white">
        <Link to="/" className="underline text-lg">
          Go to Home
        </Link>
        <br />
        <Link to="details">Details</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default UsersPage;
