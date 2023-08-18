import './App.css';
import NavBar from './nav-bar';
import Login from './login-screen';
import {HashRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import Welcome from './welcome-screen';
import Explore from './search-screen';
import Home from './home-screen';
import Search from './search-screen';
import Profile from './profile';
import AttendingList from './profile/attending-list-profile';
import WishList from './profile/wish-list-profile';
import PastEventsList from './profile/past-events-list-profile';

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<Welcome />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/search/*" element={<Search/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Navigate to="/login" />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile/attending" element={<AttendingList/>} />
          <Route path="/profile/wishlist" element={<WishList/>} />
          <Route path="/profile/past-events" element={<PastEventsList/>} />
          {/* <Route path="/profile/*" element={<Profile/>} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
