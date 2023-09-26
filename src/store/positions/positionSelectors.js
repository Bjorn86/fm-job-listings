// IMPORT PACKAGES
import { createSelector } from 'reselect';

// SELECT ALL POSITIONS
export const selectAllPositions = (state) => state.positions;

// SELECT VISIBLE POSITIONS
export const selectVisiblePositions = createSelector(
  (state) => state.positions,
  (state) => state.filters,
  (positions, filters) => {
    if (filters.length === 0) {
      return positions;
    }
    return positions.filter((position) => {
      const positionFilters = [].concat(
        position.role,
        position.level,
        ...position.languages,
        ...position.tools,
      );

      return filters.every((filter) => positionFilters.includes(filter));
    });
  },
);
