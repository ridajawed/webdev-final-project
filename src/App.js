import React from "react";
import "./App.css";
import NavBar from "./nav-bar";
import { HashRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import Welcome from "./welcome-screen";
import Search from "./search-screen";
import Home from "./home-screen";
import Login from "./login-screen";
import Register from "./register-screen";
import Profile from "./profile-screen";
import AttendingList from "./profile-screen/attending-list-profile";
import WishList from "./profile-screen/wish-list-profile";
import PastEventsList from "./profile-screen/past-events-list-profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import whoReducer from "./reducers/who-reducer";
import eventsReducer from "./reducers/events-reducer";
import authReducer from "./reducers/auth-reducer";

const store = configureStore({
  reducer: { who: whoReducer, event: eventsReducer, user: authReducer },
});

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/attending" element={<AttendingList />} />
            <Route path="/profile/wishlist" element={<WishList />} />
            <Route path="/profile/past-events" element={<PastEventsList />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}
export default App;
