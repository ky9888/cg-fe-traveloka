import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: null,
  inputValue1: null,
  dateFlight1: null,
  dateFlight2: null,
  selectFlight: "Phổ thông",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setInputValue1: (state, action) => {
      state.inputValue1 = action.payload;
    },
    setdateFlight1: (state, action) => {
      state.dateFlight1 = action.payload;
    },
    setdateFlight2: (state, action) => {
      state.dateFlight2 = action.payload;
    },
    setsetlectFlight: (state, action) => {
      state.selectFlight = action.payload;
    },
  },
});
export const {
  setInputValue,
  setInputValue1,
  setdateFlight1,
  setdateFlight2,
  setsetlectFlight,
} = inputSlice.actions;
export default inputSlice.reducer;
