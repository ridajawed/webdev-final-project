import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/index.css";
// import { useSelector } from "react-redux";

function NavBar() {
    // const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, active] = pathname.split("/");
    return (
        <div className="w-100 pos-fixed bg-grey">
            <ul className="nav nav-pills mb-2 mt-2 float-start">
                <li className="nav-item">
                    <h1 className="nav-link">
                        Travel App
                    </h1>
                </li>
            </ul>
            <ul className="nav nav-pills mb-2 mt-2 float-end">
            <li className="nav-item">
                    <Link to="/about" className={`nav-link ${active === "about" ? "active" : ""}`}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/home" className={`nav-link ${active === "home" ? "active" : ""}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className={`nav-link ${active === "search" ? "active" : ""}`}>Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className={`nav-link ${active === "login" ? "active" : ""}`}>Log In</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className={`nav-link ${active === "signup" ? "active" : ""}`}>Sign Up</Link>
                </li>
            </ul>
            {/* <Link to="/home">Home</Link> |
            <Link to="/explore">Explore</Link> |
            <Link to="/login">Log In</Link> |
            <Link to="/signup">Sign Up</Link> */}
    </div>
  );
}

export default NavBar;
