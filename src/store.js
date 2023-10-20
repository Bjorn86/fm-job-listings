// IMPORT PACKAGES
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// IMPORT REDUCERS
import { filterReducer } from './features/filters/filterSlice';
import { positionReducer } from './features/positions/positionSlice';

// ROOT REDUCER
const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionReducer,
});

// PERSIST CONFIG
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filters'],
};

// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer);

// STORE
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// PERSISTOR
export const persistor = persistStore(store);
