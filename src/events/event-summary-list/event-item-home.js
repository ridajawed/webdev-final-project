import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const EventSummaryItemHome = (
  {
    event = {
      "title": "Party",
      "day": "22",
      "month": "OCT",
      "year": "2023",
      "time": "6:30pm-7:30pm",
      "image": "travel2.jpg",
      "banner" : "travel2banner.jpg",
      "saved": false
    }
  }
  
) => {
  let saveButton;
  if (event.saved) {
    saveButton = <BsBookmarkFill color="#fb3958"/>;
  } else {
    saveButton = <BsBookmark />;
  }
  return (
    <li className="event-item list-group-item list-group-item-secondary ml-5 mr-5 mb-2">
      <div className="row mb-2">
        <img width={600} height={225} className="" src={`/images/${event.banner}`} />
      </div>
      <div className="row">
        <div className="col-1 padding-0">
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
        <div className="col-1">
        <div className="float-end">
            {saveButton}
        </div>
        </div>
      </div>
    </li>
  );
};
export default EventSummaryItemHome;