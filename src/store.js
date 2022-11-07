import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./features/cards/cardsSlice";
import { addModalReducer } from "./features/modals/addModalSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    addModal: addModalReducer,
  },
});
