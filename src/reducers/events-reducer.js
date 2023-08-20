import { createSlice } from "@reduxjs/toolkit";
import events from "./events.json";

const eventSlice = createSlice({
  name: "event",
  initialState: { events: events },
});

export default eventSlice.reducer;
