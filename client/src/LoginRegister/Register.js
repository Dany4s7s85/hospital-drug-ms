import React, { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./LoginRegister.css";
import { useHistory, Link } from "react-router-dom";

function Register() {
  const history = useHistory();
  // useState hook use for Form data
  var [name, setname] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  //this state use for response from server
  var [response, setresponse] = useState("");

  function inputValue(event) {
    setname({ ...name, [event.target.name]: event.target.value });
  }

  function SendForm(event) {
    event.preventDefault();
    axios
      .post("/register", name)
      .then(function (response) {
        if (response.data === "register") {
          history.push("/resend");
        } else {
          setresponse(response.data);
        }
      })
      .catch(function (error) {
        setresponse("unexpected error occured");
      });
  }

  return (
    <div>
      <div class="login-page">
        <div class="container d-flex align-items-center">
          <div class="form-holder has-shadow">
            <div class="row">
              <div class="col-lg-6">
                <div class="info d-flex align-items-center">
                  <div class="content">
                    <div class="logo">
                      <h1>Sign-Up</h1>
                    </div>
                    <p>Sign-up to East Medical System</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                  <div class="content">
                    <form method="get" class="form-validate">
                      <div class="form-group">
                        <input
                          id="login-username"
                          class="input-material text-white myplaceholder"
                          autoComplete="off"
                          value={name.fullName}
                          onChange={inputValue}
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="login-username"
                          type="text"
                          required
                          data-msg="Please enter your username"
                          class="input-material text-white myplaceholder"
                          autoComplete="off"
                          value={name.email}
                          onChange={inputValue}
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="login-password"
                          type="password"
                          required
                          data-msg="Please enter your password"
                          class="input-material text-white myplaceholder"
                          autoComplete="off"
                          value={name.password}
                          onChange={inputValue}
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <p className="text-danger">{response}</p>
                      <button
                        id="login"
                        href="index.html"
                        class="btn"
                        style={{ background: "#e95f71" }}
                        onClick={SendForm}
                      >
                        Sign-Up
                      </button>
                    </form>
                    <br />
                    <small className=" text-white">
                      If already have an account{" "}
                    </small>
                    <Link to="/login" class="signup">
                      Sign-In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
