import React, { useEffect } from "react";
import eventsArray from "./events.json";
import EventSummaryItem from "./event-summary-item";
import { useDispatch, useSelector } from "react-redux";
import {
  findEventsThunk,
  searchEventsThunk,
} from "../../services/events-thunks";

const EventSummaryList = () => {
  const { events, loading } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findEventsThunk);
  }, []);
  return (
    <div className="hscroll w-100">
      <ul className="list-group list-group-horizontal">
        {loading && <li className="list-group-item">Loading...</li>}
        {events.map((event) => (
          <EventSummaryItem key={event._id} event={event} />
        ))}
      </ul>
    </div>
  );
};
export default EventSummaryList;
