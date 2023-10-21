// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = [];

// FILTER SLICE
const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    // eslint-disable-next-line arrow-body-style
    removeFilter: (state, action) => {
      return state.filter((filter) => filter !== action.payload);
    },
    // eslint-disable-next-line arrow-body-style
    clearFilters: () => {
      return initialState;
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
