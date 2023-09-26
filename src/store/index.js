// IMPORT PACKAGES
import { createStore } from 'redux';

// IMPORT REDUCERS
import { rootReducer } from './rootReducer';

// IMPORT UTILS
import { loadState, saveState } from '../utils/utils';

// STORE
export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.subscribe(() => {
    saveState({
      filters: store.getState().filters,
    });
  });

  return store;
};
