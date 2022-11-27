

import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";

// Import styles
import '../src/index.scss'

// Import App project
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
