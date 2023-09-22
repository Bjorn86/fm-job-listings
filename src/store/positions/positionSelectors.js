// SELECT ALL POSITIONS
export const selectAllPositions = (state) => state.positions;

// SELECT VISIBLE POSITIONS
export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions;
  }
  return state.positions.filter((position) => {
    const positionFilters = [].concat(
      position.role,
      position.level,
      ...position.languages,
      ...position.tools,
    );

    return filters.every((filter) => positionFilters.includes(filter));
  });
};
