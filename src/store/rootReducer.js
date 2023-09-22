// IMPORT PACKAGES
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { positionReducer } from './positions/positionReducer';
import { filterReducer } from './filters/filterReducer';

// REDUCER
export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
