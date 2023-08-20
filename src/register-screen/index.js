import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../services/auth-thunks";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(register({ username, password }));
      navigate("/login");
      console.log("registered!");
      console.log(username);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="nav-padding">
      <div className="row">
        <div className="col-6 bg-grey round-top-left round-bottom-left">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 padding-top max-height">
              <div className="container">
                <h1 className="">Sign Up</h1>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  className="form-control width-300"
                  type="email"
                  id="register-email"
                />
                <br />
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  id="register-username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  className="form-control width-300"
                  type="password"
                  id="register-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <br />
                <input
                  className="form-control"
                  type="password"
                  id="register-confirm-password"
                />
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="mt-3 rounded-pill btn btn-primary"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
