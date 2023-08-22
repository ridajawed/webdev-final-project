import React from "react";
import coverImage from "../images/welcome.jpg";
import profileImage from "../images/welcome.jpg";

function Info() {
  return (
    <div className="">
      <div className="w-100">
        <img src={coverImage} className="w-100" alt={"Welcome"} />
        <img
          width={100}
          height={100}
          className="profile-on-banner rounded-circle nudge-right nudge-up"
          src={`/images/travel2.jpg`}
        />
      </div>
      <div className="container profile-on-banner">
        @bob
        <br />
        <b>Billy Bob</b>
        <br />
        <span>I like to go on hikes</span>
        <br />
      </div>
    </div>
  );
}
export default Info;
