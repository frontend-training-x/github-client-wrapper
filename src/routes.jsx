import { Route, Routes } from 'react-router-dom';

import HomePage from './page-components/index';
import StorePage from './page-components/store';

// Define your routes here
function RoutesTree() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default RoutesTree;
