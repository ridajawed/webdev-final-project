import React from "react";
import EventSummaryList from "../events/event-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import welcomeImage from "../images/welcome.jpg";
import { Link, useLocation } from "react-router-dom";

function NavProfile() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [ignore, profile, active] = pathname.split("/");

  return (
    <div className="container">
      <ul className="nav nav-pills mb-2 mt-2 justify-content-center">
        <li className="nav-item">
          <Link
            to="/profile/attending"
            className={`nav-link ${active === "attending" ? "active" : ""}`}
          >
            Attending
          </Link>
        </li>
        {!currentUser && (
                  <li className="nav-item">
                  <Link
                    to="/profile/wishlist"
                    className={`nav-link ${active === "wishlist" ? "active" : ""}`}
                  >
                    Wishlist
                  </Link>
                </li>

        )}
        <li className="nav-item">
          <Link
            to="/profile/past-events"
            className={`nav-link ${active === "past-events" ? "active" : ""}`}
          >
            Past Events
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavProfile;
