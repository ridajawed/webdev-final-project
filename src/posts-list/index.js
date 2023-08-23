import React, { useEffect } from "react";
import postsArray from "./posts.json";
import PostItem from "./post-item";
import { findEventsThunk } from "../services/events-thunks";
import { useSelector, useDispatch } from "react-redux";

const PostsList = () => {
  const { events, loading } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findEventsThunk());
  }, []);

  return (
    <div className="">
      {/* <ul className="list-group">
     {
       postsArray.map(event =>
         <PostItem
           key={event._id} event={event}/> )
     }
   </ul> */}
      <ul className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}
        {events.map((event) => (
          <PostItem key={event._id} event={event} />
        ))}
      </ul>
    </div>
  );
};
export default PostsList;
