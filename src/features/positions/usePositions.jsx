// IMPORT PACKAGES
import { useSelector } from 'react-redux';

// IMPORT SELECTORS
import { selectVisiblePositions } from './positionSelectors';
import { selectFilters } from '../filters/filterSelectors';

// USE POSITIONS HOOK
export const usePositions = () => {
  // HOOKS
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  );

  return {
    positions,
    currentFilters,
  };
};
