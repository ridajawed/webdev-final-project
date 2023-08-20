import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { BiMessageRounded } from "react-icons/bi";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";

// import { BsUpload } from "react-icons/bs";
// import {updateTuitThunk} from "../services/tuits-thunks";

const PostStats = ({
  post = {
    _id: "1123",
    username: "bob",
    profileImage: "travel1.jpg",
    fname: "Billy",
    lname: "Bob",
    attending: "Attending",
    wishlist: true,
    event_id: "1123",
    likes: "2345",
    interests: "2",
    liked: true,
    interested: true,
  },
}) => {
  // const dispatch = useDispatch();
  // const likeTuitHandler = (id) => {
  //     dispatch(updateTuitThunk({ ...tuit, liked: true, likes: tuit.likes + 1 }))
  // }

  // const unlikeTuitHandler = (id) => {
  //     dispatch(updateTuitThunk({ ...tuit, liked: false, likes: tuit.likes - 1 }))
  // }

  // const dislikeTuitHandler = (id) => {
  //     dispatch(updateTuitThunk({ ...tuit, disliked: true, dislikes: tuit.dislikes + 1 }))
  // }

  // const undodislikeTuitHandler = (id) => {
  //     dispatch(updateTuitThunk({ ...tuit, disliked: false, dislikes: tuit.dislikes - 1 }))
  // }

  let likedButton;
  if (post.liked) {
    // likedButton = <AiFillHeart color="#fb3958" onClick={() => unlikeTuitHandler(tuit._id)} />;
    likedButton = <BsHandThumbsUpFill color="#1DA1F2" />;
  } else {
    // likedButton = <AiOutlineHeart onClick={() => likeTuitHandler(tuit._id)} />;
    likedButton = <BsHandThumbsUp />;
  }

  let interestedButton;
  if (post.interested) {
    // dislikedButton = <AiFillDislike color="#1DA1F2" onClick={() => undodislikeTuitHandler(tuit._id)} />;
    interestedButton = <AiFillHeart color="#fb3958" />;
  } else {
    // dislikedButton = <AiOutlineDislike onClick={() => dislikeTuitHandler(tuit._id)} />;
    interestedButton = <AiOutlineHeart />;
  }

  return (
    <div className="row">
      <div className="col-6 text-center">
        {likedButton}
        {post.likes}
      </div>
      <div className="col-6 text-center">
        {interestedButton}
        {post.interests}
      </div>
    </div>
  );
};

export default PostStats;
