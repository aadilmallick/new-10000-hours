import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const editModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isOpen = true;
    },
    closeEditModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const editModalReducer = editModalSlice.reducer;
export const { openEditModal, closeEditModal } = editModalSlice.actions;
