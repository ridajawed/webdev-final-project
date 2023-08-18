import EventSummaryList from "../events/event-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import welcomeImage from "../images/welcome.jpg";


function Search() {
   return (
      <div className="nav-padding position-relative mb-2 bg-my-primary wide">
         <div className="w-100">
            <img src={welcomeImage} className="w-100" alt={"Welcome"} />
         </div>
         <div className="pt-3 container">
            <div className="row">
               <div className="col-11 position-relative">
                  <input placeholder="Activities to do..."
                     className="form-control rounded-pill ps-5" />
                  <AiOutlineSearch className="fs-3 position-absolute
                       wd-nudge-up"/>
               </div>
               <div className="col-1">
                  <button className="rounded-pill btn btn-primary float-end">Search</button>
               </div>
            </div>
            <h3 className="pt-3">Recommendations</h3>
            <EventSummaryList />
            <br/>
            <br/>
         </div>
      </div>
   );
}
export default Search;