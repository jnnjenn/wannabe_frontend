import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

const newRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  );
};

export { newRoutes };
