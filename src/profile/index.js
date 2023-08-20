import React from "react";
import EventSummaryList from "../events/event-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import coverImage from "../images/welcome.jpg";
import profileImage from "../images/welcome.jpg";
import { Link, useLocation } from "react-router-dom";
import NavProfile from "./nav-profile";
import "../css/index.css";
import Info from "./info";

function Profile() {
  const { pathname } = useLocation();
  const [ignore, profile, active] = pathname.split("/");

  return (
    <div className="nav-padding position-relative mb-2 bg-my-primary wide">
      <Info />
      <NavProfile />
    </div>
  );
}
export default Profile;
