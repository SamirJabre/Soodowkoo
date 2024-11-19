import { createSlice } from '@reduxjs/toolkit';

interface DisplayDiffState {
  displayDifficulty: boolean;
}

const initialState: DisplayDiffState = {
  displayDifficulty: false,
};

const displayDiffSlice = createSlice({
  name: 'displayDifficulty',
  initialState,
  reducers: {
    showDifficulty: (state) => {
      state.displayDifficulty = true;
    },
    hideDifficulty: (state) => {
      state.displayDifficulty = false;
    },
  },
});

export const { showDifficulty, hideDifficulty } = displayDiffSlice.actions;
export default displayDiffSlice.reducer;
