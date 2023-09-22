// IMPORT ACTIONS TYPE
import { ACTIONS_TYPE } from '../../utils/constants';

// REDUCER
// eslint-disable-next-line default-param-last
export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPE.addFilter: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }
    case ACTIONS_TYPE.removeFilter: {
      return state.filter((filter) => filter !== action.filter);
    }
    case ACTIONS_TYPE.clearFilters: {
      return [];
    }
    default: {
      return state;
    }
  }
};
