import React from "react";
import coverImage from "../images/welcome.jpg";
import profileImage from "../images/travel2.jpg";

const Info = (
  {
    user = {
      "_id" : "12wed",
      "username": { type: "billybob", required: true, unique: true },
      "password": { type: "helloo1", required: true },
      "firstName": "Bob",
      "lastName": "Billy",
      "userType": "traveller",
      "coverImage": "welcome.jpg",
      "profileImage" : "travel2.jpg",
      "status" : "I like to go on hikes",
      "preferences" : ["hiking ", "outdoors ", "museums "]

    }
  }

) => {
  return (
    <div className="">
      <div className="w-100">
        <img src={`/images/${user.coverImage}`} className="w-100" alt={"Welcome"} />
        <img
          width={100}
          height={100}
          className="profile-on-banner rounded-circle nudge-right nudge-up"
          src={`/images/${user.profileImage}`}
        />
      </div>
      <div className="container profile-on-banner">
        @{user.username.type}
        <br />
        <b>{user.firstName} {user.lastName}</b>
        <br />
        <span><b>Status: </b>{user.status}</span><br/>
        <label><b>Event preferences:</b></label>
        <p>{user.preferences}</p>
        
        <br />
      </div>
    </div>
  );
}
export default Info;
