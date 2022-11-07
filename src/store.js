import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./features/cards/cardsSlice";
import { addModalReducer } from "./features/modals/addModalSlice";
import { editModalReducer } from "./features/modals/editModalSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    addModal: addModalReducer,
    editModal: editModalReducer,
  },
});
