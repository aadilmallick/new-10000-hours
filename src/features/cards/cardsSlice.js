import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  isLoading: true,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push({ ...action.payload });
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;
