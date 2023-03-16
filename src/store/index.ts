import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "./slices/inputsSlice";

export const store = configureStore({
  reducer: {
    inputs: inputsReducer,
  },
});
