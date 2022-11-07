import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const cardsReducer = cardsSlice.reducer;
export const { _ } = cardsSlice.actions;
