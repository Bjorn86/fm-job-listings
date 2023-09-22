// IMPORT PACKAGES
import { createStore } from 'redux';

// IMPORT REDUCERS
import { rootReducer } from './rootReducer';

// STORE
const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
