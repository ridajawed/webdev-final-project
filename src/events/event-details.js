import React from "react";
import eventsArray from "./event-summary-list/events.json";
import EventSummaryItem from "./event-summary-list/event-summary-item";

const EventsDetails = (
  {
    event = {
      "title": "Party",
      "day": "22",
      "month": "OCT",
      "year": "2023",
      "time": "6:30pm-7:30pm",
      "image": "travel2.jpg",
      "banner": "travel2banner.jpg",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "saved": false
    }
  }

) => {
  return (
    <div className="nav-padding">
      <img className="w-100" height={500} src={`/images/${event.banner}`} />
      <div className="container">
        <div className="row">
          <div className="mt-4 col-1 padding-0 text-center">
            <h2 className="month-lg m-0 padding-0">{event.month}</h2>
            <div className="row">
              <h1 className="day-lg m-0 padding-0">{event.day}</h1>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <h4 className="mt-5">{event.time}</h4>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <button type="submit" className="mt-3 rounded-pill btn btn-primary">Attend</button>
              </div>
              <div className="col-4">
                <button type="submit" className="mt-3 rounded-pill btn btn-secondary">Add to Wishlist</button>
              </div>
              <div className="col-4">
                <button type="submit" className="mt-3 rounded-pill btn btn-danger">Delete Event</button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="border-3">
          <h1 className="mt-4">Event: {event.title}</h1>

          <br />
          <p>{event.details}</p>
        </div>
        <div className="m-3">
          <h4>Previosuly: </h4>
          <img className="w-100" height={500} src={`/images/${event.image}`} />

        </div>




      </div>
    </div>
  );
};
export default EventsDetails;
