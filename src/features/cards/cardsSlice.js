import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "./firebaseAPI";
const url = "https://hours-896df-default-rtdb.firebaseio.com/";

const initialState = {
  cards: [],
  isLoading: false,
};

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async (payload, thunkAPI) => {
    try {
      const username = thunkAPI.getState().user.username;
      const response = await axios.get(`${url}goals/${username}.json`);
      const data = getData(response.data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

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
    deleteCard: (state, action) => {
      const id = action.payload;
      state.cards = state.cards.filter((card) => card.id !== id);
    },
  },
  extraReducers: {
    [fetchCards.pending]: (state) => {
      console.log("fetchin in progress...");
      state.isLoading = true;
    },
    [fetchCards.fulfilled]: (state, action) => {
      console.log("fetching complete");
      const cards = action.payload;
      state.cards = cards;
      state.isLoading = false;
    },
    [fetchCards.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { addCard, editCard, deleteCard } = cardsSlice.actions;
