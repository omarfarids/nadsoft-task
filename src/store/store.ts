import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/globalReducer";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
