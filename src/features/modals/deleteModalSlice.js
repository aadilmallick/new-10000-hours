import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal: (state, action) => {
      state.isOpen = true;
    },
    closeDeleteModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const deleteModalReducer = deleteModalSlice.reducer;
export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
