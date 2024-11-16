// src/displaySlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface DisplayState {
  displayHowToPlay: boolean;
}

const initialState: DisplayState = {
  displayHowToPlay: false,
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    showHowToPlay: (state) => {
      state.displayHowToPlay = true;
    },
    hideHowToPlay: (state) => {
      state.displayHowToPlay = false;
    },
  },
});

export const { showHowToPlay, hideHowToPlay } = displaySlice.actions;
export default displaySlice.reducer;
