import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  isLoading: false,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push({ ...action.payload });
    },
    editCard: (state, action) => {
      const { id, hoursWorked, minutesWorked, task } = action.payload;
      state.cards = state.cards.map((card) => {
        if (card.id === id) {
          card.currentHours +=
            hoursWorked + Number((minutesWorked / 60).toFixed(1));
        }
        return { ...card };
      });
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { addCard, editCard } = cardsSlice.actions;
