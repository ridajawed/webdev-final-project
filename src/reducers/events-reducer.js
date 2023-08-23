// import { createSlice } from "@reduxjs/toolkit";
// import events from "./events.json";

// const eventSlice = createSlice({
//   name: "event",
//   initialState: { events: events },
// });

// export default eventSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import events from "./events.json";

import {
  deleteEventThunk,
  findEventsThunk,
  createEventThunk,
  updateEventThunk,
} from "../services/events-thunks";
const initialState = {
  events: [],
  loading: false,
};

const currentUser = {
  userName: "Dancing Studio",
  handle: "@dancingStudio",
  image: "nasa-logo-jpg",
};

const templateEvent = {
  ...currentUser,
  title: "Dancing",
  liked: false,
  likes: 0,
};

const eventsSlice = createSlice({
  name: "events",
  initialState: { events: events },
  extraReducers: {
    [findEventsThunk.pending]: (state) => {
      state.loading = true;
      state.events = [];
    },
    [findEventsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.events = payload;
    },
    [findEventsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteEventThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.events = state.events.filter((t) => t._id !== payload);
    },
    [createEventThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.events.push(payload);
    },
    [updateEventThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const eventNdx = state.events.findIndex((t) => t._id === payload._id);
      state.events[eventNdx] = { ...state.events[eventNdx], ...payload };
    },
  },

  reducers: {
    deleteEvent(state, action) {
      const index = state.events.findIndex(
        (event) => event._id === action.payload
      );
      state.events.splice(index, 1);
    },
    createEvent(state, action) {
      state.events.unshift({
        ...action.payload,
        ...templateEvent,
        _id: new Date().getTime(),
      });
    },
  },
});
export const { createEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
