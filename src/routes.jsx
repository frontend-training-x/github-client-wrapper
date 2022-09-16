import { Route, Routes } from 'react-router-dom';

import HomePage from './page-components/index';
import StorePage from './page-components/store';
import UserPage from './page-components/UserPage';
import UsersPage from './page-components/usersPage';

// Define your routes here
function RoutesTree() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />

      <Route path="/users/*" element={<UsersPage />}>
        <Route path=":username" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesTree;
