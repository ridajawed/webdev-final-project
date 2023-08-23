import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EventSummaryList from "../events/event-summary-list";
import { logoutThunk } from "../services/auth-thunks";
import NavProfile from "./nav-profile";
import Info from "../profile-screen/info";
import MakeAPost from "./make-a-post";
import { fetchEventsThunk, findEventsThunk } from "../services/events-thunks";

const Profile = ({
  user = {
    _id: "12wed",
    username: { type: "billybob", required: true, unique: true },
    password: { type: "helloo1", required: true },
    firstName: "Bob",
    lastName: "Billy",
    userType: "traveller",
    coverImage: "welcome.jpg",
    profileImage: "travel2.jpg",
  },
}) => {
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
      <Info key={user._id} user={user} />
      {currentUser && currentUser.userType == "business" && <MakeAPost />}
      <NavProfile key={user._id} user={user} />
    </div>
  );
};
export default Profile;
