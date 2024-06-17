import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 inputHotell:null,
 inputHotel1:null,
 dateHotel1:null,
 dateHotel2:null,
};

export const inputHotelSlice = createSlice({
  name: "input1",
  initialState,
  reducers: {
    setInputHotel: (state, action) => {
        state.inputHotell = action.payload;
    },
    setInputHotel1: (state, action) => {
        state.inputHotel1 = action.payload;
    },
    
    setDateHotel1: (state, action) => {
        state.dateHotel1 = action.payload;
    },
    setDateHotel2: (state, action) => {
        state.dateHotel2 = action.payload;
    },
    
    
  },
});
export const { setInputHotel,setInputHotel1,setDateHotel1,setDateHotel2} = inputHotelSlice.actions;
export default inputHotelSlice.reducer;

