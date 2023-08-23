import React from "react";
import eventsArray from "./event-summary-list/events.json";
import EventSummaryItemHome from "./event-summary-list/event-item-home";

const EventSummaryListHome = () => {
  return (
    <div className="hscroll w-100">
      <ul className="list-group">
        {eventsArray.map((event) => (
          <EventSummaryItemHome key={event._id} event={event} />
        ))}
      </ul>
    </div>
  );
};
export default EventSummaryListHome;
