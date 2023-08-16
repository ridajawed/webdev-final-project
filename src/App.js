import './App.css';
import NavBar from './nav-bar';
import Login from './login-screen';
import {HashRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import Welcome from './welcome-screen';
import Explore from './explore-screen';
import Home from './home-screen';

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<Welcome />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/explore/*" element={<Explore/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </HashRouter>

    // <div>
    //   <NavBar/>
    //   <h1>Hello World!</h1>
    // </div>
  );
}
export default App;
