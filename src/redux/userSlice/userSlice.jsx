import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { userName, email } = action.payload;
      console.log("action", state.userName);
      state.userName = userName;
      state.email = email;
    },
    resetUser: (state) => {
      state.userName = "";
      state.email = "";
    },
  },
});
export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
