import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import PostStats from "./post-stats";
import EventSummaryItem from "../events/event-summary-list/event-summary-item";
import EventItem from "../events/event-summary-list/event-item-post";

import eventsArray from '../events/event-summary-list/events.json';


const PostItem = (
  {
    post = {
      "_id" : "123",
      "username": "bob",
      "profileImage": "travel1.jpg",
      "fname": "Billy",
      "lname": "Bob",
      "attending": "Attending",
      "wishlist": true,
      "event_id": "123",
      "likes" : "2345",
      "interests" : "2",
      "liked" : true,
      "interested" : true
    }
  }

) => {
  function getEvent(jsonObject, id) {
    return jsonObject.filter(function(jsonObject) {
      return (jsonObject['id'] == id);
    })[0];
  }
  // let saveButton;
  // if (event.saved) {
  //   saveButton = <BsBookmarkFill color="#fb3958" />;
  // } else {
  //   saveButton = <BsBookmark />;
  // }
  return (
    <li className="post-item list-group-item ml-5 mr-5">
      <div className="row">
        <div className="col-1">
          <img width={48} height={48} className="rounded-circle" src={`/images/${post.profileImage}`} />
        </div>
        <div className="col-11">
          {/* <TiDeleteOutline className="float-end" onClick={() => deleteTuitHandler(post._id)}></TiDeleteOutline> */}
          <div> <b>@{post.username}</b>  </div>
          <div>{post.fname} {post.lname}</div>
          <div className={`${post.attending}`}>{post.attending}</div>
          <br />
          <EventItem key={post.event_id} />
          <div className="col-12"><hr/></div>
          <PostStats key={post._id} post={post} />
        </div>
      </div>

    </li>
  );
};
export default PostItem;