// IMPORT PACKAGES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// IMPORT STYLES
import './index.scss';

// IMPORT COMPONENTS
import App from './components/App/App';

// IMPORT STORES
import { store, persistor } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
