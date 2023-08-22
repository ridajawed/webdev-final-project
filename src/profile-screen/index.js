import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EventSummaryList from "../events/event-summary-list";
import { logoutThunk } from "../services/auth-thunks";
import NavProfile from "./nav-profile";
import Info from "../profile-screen/info";
import MakeAPost from "./make-a-post";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="nav-padding position-relative mb-2 bg-my-primary wide">
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
      <Info />
      {currentUser && currentUser.userType == "business" && <MakeAPost />}
      <NavProfile />
    </div>
  );
}
export default Profile;
