import eventsArray from '../events/event-summary-list';
import NavProfile from "./nav-profile";
import "../css/index.css";
import Info from "./info";
import EventSummaryItemProfile from '../events/event-summary-list/event-summary-item-profile';
import EventSummaryList from '../events/event-summary-list';
import EventSummaryItem from '../events/event-summary-list/event-summary-item';
import React from "react";
import postsArray from '../posts-list/posts.json';
import PostItem
    from "../posts-list/post-item";

const PastEventsList = () => {
    return (
        <div className="">
            <Info />
            <NavProfile />
            <ul className="list-group container mt-3">
                {
                    postsArray.map(event =>
                        <EventSummaryItemProfile
                            key={event._id} event={event} />)
                }
            </ul>

        </div>

    );
};
export default PastEventsList;