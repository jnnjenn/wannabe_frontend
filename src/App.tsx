import { BrowserRouter as Router } from 'react-router-dom';

// Import New Routes
import { newRoutes } from './routes';

function App() {
  return (
    <Router>
      {newRoutes()}
    </Router>
  );
};

export default App;