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
      navigate("/profile");
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
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  className="form-control width-300"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="mt-3 rounded-pill btn btn-primary"
                >
                  Login
                </button>
                <br />
                <br />
                <button onClick={() => navigate("/register")}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
