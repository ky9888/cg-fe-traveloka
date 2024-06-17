import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 fligt1:null,
 fligt2:null,
 dateflight1:null,
 dateflight2:null,
};

export const flightPage = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setflight1: (state, action) => {
        state.fligt1 = action.payload;
    },
    setflight2: (state, action) => {
        state.fligt2 = action.payload;
    },
    
    setDateflight1: (state, action) => {
        state.dateflight1 = action.payload;
    },
    setDateflight2: (state, action) => {
        state.dateflight2 = action.payload;
    },
    
    
  },
});
export const {setflight1,setflight2,setDateflight1,setDateflight2} = flightPage.actions;
export default flightPage.reducer;

