import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "./headerSlice/dropdown";
import adultSlice from "./mainSlice/toggleAdult";
import dropdownSlice1 from "./mainSlice/dropdown";

import childrenSlice from "./mainSlice/toggleChildren";
import babySlice from "./mainSlice/toggleBaby";

const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    dropdown1: dropdownSlice1,

    adult: adultSlice,
    children: childrenSlice,
    baby: babySlice,
  },
});
export default store;
