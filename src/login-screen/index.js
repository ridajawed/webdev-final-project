import React, { useState } from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import { register } from "../services/auth-thunks";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      await dispatch(register({ username, password }));
      console.log("registered!");
      console.log(username);
    } catch (e) {
      alert(e);
    }
  };
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ username, password }));
      navigate("./profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="nav-padding">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 padding-top">
              <div className="container">
                <h1 className="">Login</h1>
                <form>
                  <label htmlFor="username">Username:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="text"
                    id="username"
                    name="username"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <br />
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="mt-3 rounded-pill btn btn-primary"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 bg-grey round-top-left round-bottom-left">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 padding-top max-height">
              <div className="container">
                <h1 className="">Sign Up</h1>
                <form>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <br />
                  <label htmlFor="username">Username:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <br />
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <br />
                  <input
                    className="form-control"
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                  />
                  <button
                    onClick={handleRegister}
                    type="submit"
                    className="mt-3 rounded-pill btn btn-primary"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
