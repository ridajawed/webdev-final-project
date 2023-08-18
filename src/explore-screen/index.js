import React from "react";
import welcomeImage from "../images/welcome.jpg";
import EventSummaryList from "../event-summary-list";
import SearchBar from "../search-bar";

function Explore() {
  return (
    <div className="nav-padding">
      <div className="w-100">
        <img src={welcomeImage} className="w-100" alt={"Welcome"} />
        <SearchBar />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h3>Events Happening</h3>
      <EventSummaryList />
    </div>
  );
}
export default Explore;
