import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./features/cards/cardsSlice";
import { addModalReducer } from "./features/modals/addModalSlice";
import { editModalReducer } from "./features/modals/editModalSlice";
import { deleteModalReducer } from "./features/modals/deleteModalSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    addModal: addModalReducer,
    editModal: editModalReducer,
    deleteModal: deleteModalReducer,
  },
});
