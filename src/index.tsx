

import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

// Import styles
import '../src/index.scss'

// Import App project
import App from './App';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
