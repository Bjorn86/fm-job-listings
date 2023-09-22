// IMPORT ACTIONS TYPE
import { ACTIONS_TYPE } from '../../utils/constants';

// REDUCER
// eslint-disable-next-line default-param-last
export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPE.addPositions: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
