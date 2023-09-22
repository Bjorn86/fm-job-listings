// IMPORT ACTIONS TYPE
import { ACTIONS_TYPE } from '../../utils/constants';

// ADD POSITIONS
export const addPositions = (positions) => ({
  type: ACTIONS_TYPE.addPositions,
  positions,
});
