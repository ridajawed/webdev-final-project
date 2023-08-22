import axios from "axios";
// const TUITS_API = "http://localhost:4000/api/tuits";
// const TUITS_API =
//   "https://cs5610-tuiter-node-server-app.onrender.com/api/tuits";
const API_BASE = process.env.REACT_APP_API_BASE;
const EVENTS_API = `${API_BASE}/events`;

export const createEvent = async (event) => {
  console.log(event);
  const response = await axios.post(EVENTS_API, event);
  return response.data;
};

export const findEvents = async () => {
  const response = await axios.get(EVENTS_API);
  const events = response.data;
  return events;
};

export const deleteEvent = async (eid) => {
  const response = await axios.delete(`${EVENTS_API}/${eid}`);
  return response.data;
};

export const updateEvent = async (event) => {
  const response = await axios.put(`${EVENTS_API}/${event._id}`, event);
  return event;
};
