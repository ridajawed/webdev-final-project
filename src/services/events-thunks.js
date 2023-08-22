import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./events-service";

export const findEventsThunk = createAsyncThunk(
  "events/findEvents",
  async () => await service.findEvents()
);

export const createEventThunk = createAsyncThunk(
  "tuits/createEvent",
  async (event) => {
    const newEvent = await service.createEvent(event);
    return newEvent;
  }
);

export const deleteEventThunk = createAsyncThunk(
  "events/deleteEvent",
  async (eventId) => {
    await service.deleteEvent(eventId);
    return eventId;
  }
);

export const updateEventThunk = createAsyncThunk(
  "events/updateEvent",
  async (event) => await service.updateEvent(event)
);
