import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const EventSummaryItemProfile = (
  {
    event = {
      "title": "Party",
      "day": "22",
      "month": "OCT",
      "year": "2023",
      "time": "6:30pm-7:30pm",
      "image": "travel2.jpg",
      "saved": true
    }
  }
  
) => {
  return (
    <li className="list-group-item list-group-item-secondary ml-5 mr-5">
      <div className="row">
        <div className="col-1 padding-0 justify-content-center">
          <div className="row">
            <p className="month m-0 padding-0">{event.month}</p>
          </div>
          <div className="row">
            <p className="day m-0 padding-0">{event.day}</p>
          </div>
        </div>
        <div className="col-10 ml-1 mr-0">
          <div className="">
            <div className="row">
              <p className="m-0 time">{event.time}</p>
            </div>
            <div className="row">
              <p className="event-title m-0 mt-2">{event.title}</p>
            </div>
          </div>

        </div>
      </div>
    </li>
  );
};
export default EventSummaryItemProfile;