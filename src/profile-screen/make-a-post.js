import React, { useState } from "react";
import "../css/index.css";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineGif } from "react-icons/hi2";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createEventThunk } from "../services/events-thunks";

const MakeAPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [date, setDate] = useState("");
  const dispatch = useDispatch();
  const eventClickHandler = () => {
    const newEvent = {
      title: title,
      desc: description,
      date: date,
      username: currentUser.username,
      image: currentUser.username + "-logo.jpg",
    };
    dispatch(createEventThunk(newEvent));
    setTitle("");
    setDescription("");
    setDate("");
  };
  return (
    <div className="row padding-left-5 padding-top-5">
      <div className="col-12 ml-5">
        <div className="col-auto">
          <img
            className="rounded-circle"
            src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-NASA-Logo.jpg"
            height={60}
            width={60}
          />
        </div>
        <div className="col-10">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            className="form-control"
            type="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label htmlFor="title">Title:</label>
          <br />
          <input
            className="form-control"
            type="title"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label htmlFor="title">Date:</label>
          <br />
          <input
            className="form-control"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          {/* <textarea
            placeholder="Title"
            className="form-control border-0"
          ></textarea>
          <textarea
            placeholder="Description"
            className="form-control border-0"
          ></textarea>
          <input
            placeholder="Date"
            type={Date}

            // className="form-control border-0"
          ></input> */}
          <div className="">
            <button
              className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
              onClick={eventClickHandler}
            >
              Post
            </button>
            <div className="text-primary fs-2">
              <AiOutlinePicture className="me-3"></AiOutlinePicture>
              <HiOutlineGif className="me-3"></HiOutlineGif>
              <MdFormatListBulleted className="me-3"></MdFormatListBulleted>
              <BsEmojiSmile className="me-3"></BsEmojiSmile>
              <TbCalendarStats className="me-3"></TbCalendarStats>
              <HiOutlineLocationMarker className="me-3"></HiOutlineLocationMarker>
              <BiBold className="me-3"></BiBold>
              <BiItalic className="me-3"></BiItalic>
            </div>
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>
  );
};
export default MakeAPost;
