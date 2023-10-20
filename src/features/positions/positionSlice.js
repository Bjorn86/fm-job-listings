// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// POSITION SLICE
const positionSlice = createSlice({
  name: '@@positions',
  initialState: [],
  reducers: {
    addPositions: (_, action) => action.payload,
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;
