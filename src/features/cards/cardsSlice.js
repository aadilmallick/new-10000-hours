import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData, findCardFromId } from "./firebaseAPI";
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

export const postCard = createAsyncThunk(
  "card/postCard",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);

      const username = thunkAPI.getState().user.username;

      const response = await axios.post(
        `${url}goals/${username}.json`,
        JSON.stringify(payload),
        { headers: { "Content-Type": "application/json" } }
      );
      const data = getData(response.data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteCardFromDatabase = createAsyncThunk(
  "card/deleteCardFromDatabase",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const id = payload;
      const username = thunkAPI.getState().user.username;
      const { firebaseName } = await findCardFromId(id, username);
      const response = await axios.delete(
        `${url}/goals/${username}/${firebaseName}.json`
      );
      const data = getData(response.data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const editCardFromDatabase = createAsyncThunk(
  "card/editCardFromDatabase",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { id, hoursWorked, minutesWorked } = payload;
      const username = thunkAPI.getState().user.username;
      const { firebaseName, card } = await findCardFromId(id, username);
      card.currentHours +=
        hoursWorked + Number((minutesWorked / 60).toFixed(1));
      const response = await axios.put(
        `${url}/goals/${username}/${firebaseName}.json`,
        JSON.stringify(card),
        { headers: { "Content-Type": "application/json" } }
      );
      const data = getData(response.data);
      return data;
      // const response = await axios.post(
      //   `${url}goals/${username}.json`,
      //   JSON.stringify(payload),
      //   { headers: { "Content-Type": "application/json" } }
      // );
      // const data = getData(response.data);
      // return data;
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
      console.log(action.payload);
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
    [postCard.pending]: (state) => {
      console.log("posting in progress...");
      state.isLoading = true;
    },
    [postCard.fulfilled]: (state, action) => {
      console.log("posting complete");
      console.log(action.payload);
      state.isLoading = false;
    },
    [postCard.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
    [deleteCardFromDatabase.pending]: (state) => {
      console.log("deleting in progress...");
      state.isLoading = true;
    },
    [deleteCardFromDatabase.fulfilled]: (state, action) => {
      console.log("deleting complete");
      console.log(action.payload);
      state.isLoading = false;
    },
    [deleteCardFromDatabase.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
    [editCardFromDatabase.pending]: (state) => {
      console.log("editing in progress...");
      state.isLoading = true;
    },
    [editCardFromDatabase.fulfilled]: (state, action) => {
      console.log("editing complete");
      console.log(action.payload);
      state.isLoading = false;
    },
    [editCardFromDatabase.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { addCard, editCard, deleteCard } = cardsSlice.actions;
