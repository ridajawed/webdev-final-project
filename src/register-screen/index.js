import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../services/auth-thunks";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
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
        <div className="col-12 round-top-left round-bottom-left">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-sm-12 col-md-6 padding-top max-height">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <h1 className="">Sign Up</h1>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      className="form-control"
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
                      className="form-control"
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
                    <br />

                  </div>
                </div>

                <div className="row">
                  <label htmlFor="user-type">User Type:</label>
                  <div>
                    <input
                      // className="form-control"
                      type="radio"
                      id="traveller"
                      name="user-type"
                      value="traveller"
                      onChange={(event) => setUserType(event.target.value)}
                    />
                    <label htmlFor="traveller">Traveller </label>
                  </div>
                  <div>
                    <input
                      // className="form-control"
                      type="radio"
                      id="business"
                      name="user-type"
                      value="business"
                      onChange={(event) => setUserType(event.target.value)}
                    />
                    <label htmlFor="business"> Business</label>
                  </div>
                  <br />
                  <br />
                  <label htmlFor="user-type">Event Preferences</label>
                  <div className="row">
                    <div className="col-3">
                      <div>
                        <input
                          type="checkbox"
                          id="Restaurant"
                          name="preferences"
                        />
                        <label htmlFor="Restaurant">Restaurant</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="Tour"
                          name="preferences"
                        />
                        <label htmlFor="Tour">Tour</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="Cooking"
                          name="preferences"
                        />
                        <label htmlFor="Cooking">Cooking</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="Wine-tasting"
                          name="preferences"
                        />
                        <label htmlFor="Wine-tasting">Wine Tasting</label>
                      </div>
                    </div>
                  </div>


                  <br />
                </div>
              </div>
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

  );
}
export default Register;
