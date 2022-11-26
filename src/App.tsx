import { BrowserRouter as Router } from 'react-router-dom';

// Import New Routes
import { newRoutes } from './routes';

// Import styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {newRoutes()}
    </Router>
  );
};

export default App;