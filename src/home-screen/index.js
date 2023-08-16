import "../css/index.css";
import { useNavigate } from 'react-router-dom';
import NewPost from "./new-post";
import EventSummaryList from "../event-summary-list";


function Home() { 
    return (
        <div className="nav-padding">
            <h4 className="m-2">Events Happening Near You!</h4>
            <EventSummaryList/>
            {/* <NewPost/> */}
        </div>
    );
}
export default Home;