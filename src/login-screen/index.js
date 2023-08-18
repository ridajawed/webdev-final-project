import React, { useState } from "react";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ username, password }));
      navigate("/tuiter/profile");
    } catch (e) {
      alert(e);
    }
  };
  const handleClick = () => navigate("/profile");
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
                  <label for="username">Username:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <br />
                  <label for="password">Password:</label>
                  <br />
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                  />
                  <button
                    onClick={handleClick}
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
        <div className="col-6 bg-grey round-top-left round-bottom-left">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 padding-top max-height">
              <div className="container">
                <h1 className="">Sign Up</h1>
                <form>
                  <label for="email">Email:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <br />
                  <label for="username">Username:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <br />
                  <label for="password">Password:</label>
                  <br />
                  <input
                    className="form-control width-300"
                    type="password"
                    id="password"
                    name="password"
                  />
                  <br />
                  <label for="confirm-password">Confirm Password:</label>
                  <br />
                  <input
                    className="form-control"
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                  />
                  <button
                    onClick={handleClick}
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
