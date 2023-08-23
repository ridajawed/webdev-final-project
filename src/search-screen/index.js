import React, { useState } from "react";
import EventSummaryList from "../events/event-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import welcomeImage from "../images/welcome.jpg";
import { useDispatch, useSelector } from "react-redux";
import { findEventsThunk, searchEventsThunk } from "../services/events-thunks";

function Search() {
  const [eventType, setEventType] = useState("");
  const { events } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  let searchEventType;
  const eventClickHandler = (eventType) => {
    dispatch(findEventsThunk());
    // searchEventType = eventType;
    // searchEventType = "Tour";
    // if (searchEventType == null) {
    //   dispatch(findEventsThunk());
    // } else {
    // console.log(searchEventType);
    // dispatch(searchEventsThunk(searchEventType));
    // dispatch(findEventsThunk());
    // }
  };

  // const { events, loading } = useSelector((state) => state.event);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (eventType.props[eventType] == null) {
  //     dispatch(findEventsThunk());
  //   } else {
  //     console.log(eventType.props[eventType]);
  //     dispatch(searchEventsThunk(eventType.props[eventType]));
  //     // dispatch(findEventsThunk());
  //   }
  // }, []);

  return (
    <div className="nav-padding position-relative mb-2 bg-my-primary wide">
      <div className="w-100">
        <img src={welcomeImage} className="w-100" alt={"Welcome"} />
      </div>
      <div className="pt-3 container">
        <div className="row">
          <div className="col-lg-11 col-md-10 col-sm-10 position-relative">
            <input
              placeholder="Activities to do..."
              className="form-control rounded-pill ps-5"
              value={eventType}
              onChange={(event) => setEventType(event.target.value)}
            />
            <AiOutlineSearch
              className="fs-3 position-absolute
                       wd-nudge-up"
            />
          </div>
          <div className="col-lg-1 col-md-2 col-sm-2">
            <button
              className="ml-1 rounded-pill btn btn-primary float-end"
              onClick={eventClickHandler}
            >
              Search
            </button>
          </div>
        </div>
        <h3 className="pt-3">Recommendations</h3>
        <EventSummaryList props={{ events: events }} />
        <br />
        <br />
      </div>
    </div>
  );
}
export default Search;
