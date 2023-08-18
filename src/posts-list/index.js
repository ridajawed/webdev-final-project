import React from "react";
import postsArray from './posts.json';
import PostItem
  from "./post-item";

const PostsList = () => {
 return(
  <div className="">
       <ul className="list-group">
     {
       postsArray.map(event =>
         <PostItem
           key={event._id} event={event}/> )
     }
   </ul>

  </div>

 );
};
export default PostsList;