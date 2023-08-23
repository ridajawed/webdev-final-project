import React, { useState } from "react";
import coverImage from "../images/welcome.jpg";
import profileImage from "../images/travel2.jpg";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../services/auth-thunks";


const Info = (
  {
    user = {
      "_id": "12wed",
      "username": { type: "billybob", required: true, unique: true },
      "password": { type: "helloo1", required: true },
      "firstName": "Bob",
      "lastName": "Billy",
      "userType": "traveller",
      "coverImage": "welcome.jpg",
      "profileImage": "travel2.jpg",
      "status": "I like to go on hikes",
      "preferences": ["hiking ", "outdoors ", "museums "]
    }
  }

) => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const statusChangeHandler = () => {
    const newUser = {
        status: whatsHappening
    }
    dispatch(updateUserThunk({ ...user, status: "Helloo"}))    ;
    setWhatsHappening("");
}
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
        <div>
          <label htmlFor="status">Status</label>
          <br />
          {/* <input
            className="form-control"
            type="status"
            id="status"
            value={user.status}
          /> */}
          {/* <input className="" type="status" name="status" value={user.status} placeholder="Enter your name..." onChange={(event) => setStatus(event.target.value)} /> */}
          <textarea value={whatsHappening} placeholder="What's happening?"
            className="form-control border-0"
            onChange={(event) => setWhatsHappening(event.target.value)}>
          </textarea>
          <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={statusChangeHandler}>
            Update Status
          </button>

        </div>
        <label><b>Event preferences:</b></label>
        <p>{user.preferences}</p>
        <br />
      </div>
    </div>
  );
}
export default Info;
