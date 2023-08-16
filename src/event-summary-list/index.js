import React from "react";
import eventsArray from './events.json';
import EventSummaryItem
  from "./event-summary-item";

const EventSummaryList = () => {
 return(
  <div className="hscroll w-100">
       <ul className="list-group list-group-horizontal">
     {
       eventsArray.map(event =>
         <EventSummaryItem
           key={event._id} event={event}/> )
     }
   </ul>

  </div>

 );
};
export default EventSummaryList;