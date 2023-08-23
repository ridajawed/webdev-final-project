import React, { useEffect } from "react";
import eventsArray from "./events.json";
import EventSummaryItem from "./event-summary-item";
import { useDispatch, useSelector } from "react-redux";
import {
  findEventsThunk,
  searchEventsThunk,
} from "../../services/events-thunks";

const EventSummaryList = (eventType) => {
  const { events, loading } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    if (eventType.props[eventType] == null) {
      dispatch(findEventsThunk());
    } else {
      console.log(eventType.props[eventType]);
      dispatch(searchEventsThunk(eventType.props[eventType]));
      // dispatch(findEventsThunk());
    }
  }, []);
  return (
    <div className="hscroll w-100">
      {/* <ul className="list-group list-group-horizontal">
        {eventsArray.map((event) => (
          <EventSummaryItem key={event._id} event={event} />
        ))}
      </ul> */}
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
