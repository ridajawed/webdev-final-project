import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./events-service";

export const findEventsThunk = createAsyncThunk(
  "events/findEvents",
  async () => {
    const events = await service.findEvents();
    return events;
  }
);

export const searchEventsThunk = createAsyncThunk(
  "events/searchEvents",
  async (eventType) => {
    const events = await service.searchEvents(eventType);
    return events;
  }
);

export const createEventThunk = createAsyncThunk(
  "events/createEvent",
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

export const fetchEventsThunk = createAsyncThunk(
  "events/fetchEvents",
  async () => await service.fetchEvents()
);
