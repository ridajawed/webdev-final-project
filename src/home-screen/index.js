import React from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import EventSummaryList from "../events/event-summary-list";
import MakeAPost from "./make-a-post";
import PostsList from "../posts-list";
import WhoToFollowList from "../who-to-follow-list";

function Home() {
  return (
    <div className="nav-padding container">
      <h4 className="m-2">Events Happening Near You!</h4>
      <EventSummaryList />
      <div className="col-12">
        <hr />
      </div>

      <div className="row ml-5">
        <div className="ml-5 col-8 ">
          <PostsList />
        </div>
        <div className="ml-5 col-4 float-end">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Home;
