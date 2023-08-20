import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import EventSummaryList from "../event-summary-list";
import { logoutThunk } from "../services/auth-thunks";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="nav-padding">
      <h1>Profile Screen</h1>
      <button
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}
      >
        {" "}
        Logout
      </button>
      <h4 className="m-2">Events Happening Near You!</h4>
      <EventSummaryList />
    </div>
  );
}
export default Profile;
