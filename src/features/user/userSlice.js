import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  picture: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.picture = action.payload.picture;
      state.username = action.payload.email.substring(
        0,
        action.payload.email.indexOf("@")
      );
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
