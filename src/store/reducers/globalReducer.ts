import { createSlice } from "@reduxjs/toolkit";

// ----------- redux thunk ----------

// ------------ initial state -----------
export interface GovernmentState {
  isLightMode: boolean;
  USstate: string;
}

const initialState: GovernmentState = {
  isLightMode: true,
  USstate: "ALL",
};

// ------------ reducers ---------------
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLightMode(state) {
      state.isLightMode = !state.isLightMode;
    },
    setUSState(state, action) {
      state.USstate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLightMode, setUSState } = globalSlice.actions;

export default globalSlice.reducer;
