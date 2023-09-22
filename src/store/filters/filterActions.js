// IMPORT ACTIONS TYPE
import { ACTIONS_TYPE } from '../../utils/constants';

// ADD FILTER
export const addFilter = (filter) => ({
  type: ACTIONS_TYPE.addFilter,
  filter,
});

// REMOVE FILTER
export const removeFilter = (filter) => ({
  type: ACTIONS_TYPE.removeFilter,
  filter,
});

// CLEAR FILTERS
export const clearFilters = {
  type: ACTIONS_TYPE.clearFilters,
};
