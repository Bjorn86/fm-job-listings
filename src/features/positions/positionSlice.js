// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = [];

// POSITION SLICE
const positionSlice = createSlice({
  name: '@@positions',
  initialState,
  reducers: {
    // eslint-disable-next-line arrow-body-style
    addPositions: (_, action) => {
      return action.payload;
    },
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;
