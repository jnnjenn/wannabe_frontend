import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from '../pages/Home/Home';

// Import styles
import "../styles/custom.scss"

const newRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  );
};

export { newRoutes };
