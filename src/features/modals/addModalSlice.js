import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const addModalSlice = createSlice({
  name: "addModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const addModalReducer = addModalSlice.reducer;
export const { openModal, closeModal } = addModalSlice.actions;
