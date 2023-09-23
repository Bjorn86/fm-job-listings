// IMPORT PACKAGES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// IMPORT STYLES
import './index.scss';

// IMPORT COMPONENTS
import App from './components/App/App';

// IMPORT STORE
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
