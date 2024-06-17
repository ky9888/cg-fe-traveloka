import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "./headerSlice/dropdown";
import adultSlice from "./mainSlice/toggleAdult";
import dropdownSlice1 from "./mainSlice/dropdown";
import  inputSlice  from "./userSlice/valueInput";
import childrenSlice from "./mainSlice/toggleChildren";
import babySlice from "./mainSlice/toggleBaby";
import userSlice from "./userSlice/userSlice";
import inputHotelSlice  from "./userSlice/valueHotelInput";
import flightPage from "./userSlice/FlightPage";


const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    dropdown1: dropdownSlice1,
    user:userSlice,
    adult: adultSlice,
    children: childrenSlice,
    baby: babySlice,
    input:inputSlice,
    inputt:inputHotelSlice,
    flight:flightPage
  },
});
export default store;
