import React, { useEffect } from "react";
import eventsArray from "./event-summary-list/events.json";
import EventSummaryItemHome from "./event-summary-list/event-item-home";
import { useDispatch, useSelector } from "react-redux";
import { findEventsThunk } from "../services/events-thunks";

const EventSummaryListHome = () => {
  const { events, loading } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findEventsThunk());
  }, []);
  return (
    <div className="hscroll w-100">
      <ul className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}
        {events.map((event) => (
          <EventSummaryItemHome key={event._id} event={event} />
        ))}
      </ul>
    </div>
  );
};
export default EventSummaryListHome;
