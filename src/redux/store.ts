import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./slices/displaySlice";
import displayDiffSlice from "./slices/diplayDiffSlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    displayDifficulty: displayDiffSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
