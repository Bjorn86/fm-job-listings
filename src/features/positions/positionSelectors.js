// IMPORT PACKAGES
import { createSelector } from '@reduxjs/toolkit';

// SELECTORS
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
