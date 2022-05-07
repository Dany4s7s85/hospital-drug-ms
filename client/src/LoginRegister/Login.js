import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  var [name, setname] = useState({
    email: "",
    password: "",
  });

  var [response, setresponse] = useState("");

  function inputValue(event) {
    setname({ ...name, [event.target.name]: event.target.value });
  }

  function FormSubmit(event) {
    event.preventDefault();
    axios
      .post("/login", name)
      .then(function (response) {
        if (response.data === "login") {
          history.push("/");
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
                      <h1>Sign-In</h1>
                    </div>
                    <p>
                      Sign-In to East Medical System and then you will able to
                      access our services
                    </p>
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
                          type="text"
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
                          data-msg="Please enter your password"
                          class="input-material text-white myplaceholder"
                          autoComplete="off"
                          value={name.password}
                          onChange={inputValue}
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <p className="text-danger">{response}</p>
                      <button
                        id="login"
                        class="btn"
                        style={{ background: "#e95f71" }}
                        onClick={FormSubmit}
                      >
                        Sign-In
                      </button>
                    </form>
                    <Link to="/password" class="forgot-pass">
                      Forgot Password?
                    </Link>
                    <br />
                    <small className=" text-white">
                      Do not have an account?{" "}
                    </small>
                    <Link to="/register" class="signup">
                      Sign-Up
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

export default Login;
