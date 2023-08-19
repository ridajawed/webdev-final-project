import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import EventSummaryList from "../event-summary-list";

function Profile() {
  return (
    <div className="nav-padding">
      <h1>Profile Screen</h1>
      <h4 className="m-2">Events Happening Near You!</h4>
      <EventSummaryList />
    </div>
  );
}
export default Profile;
