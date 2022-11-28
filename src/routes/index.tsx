import { Routes, Route } from 'react-router-dom';
import CharacterDetail from '../pages/CharacterDetail/CharacterDetail';

// Import Pages
import Home from '../pages/Home/Home';

// Import styles
import "../styles/custom.scss"

const newRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={`/character-detail/:id`} element={<CharacterDetail />} />
    </Routes>
  );
};

export { newRoutes };
