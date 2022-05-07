import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Password() {
  function InputFields() {
    const history = useHistory();
    const [inputstate, setinputstate] = useState(2);
    const [err, seterror] = useState();
    const [email, setemail] = useState({ id: 11, email: "" });
    const [number, setnumber4] = useState({ id: 22, number: "" });
    const [password, setpassword] = useState({ id: 33, password: "" });

    // that function handle user input information
    function ChangeHandle(e) {
      const name = e.target.name;
      if (name === "email") {
        setemail({ ...email, [name]: e.target.value });
      } else if (name === "number") {
        setnumber4({ ...number, [name]: e.target.value });
      } else if (name === "password") {
        setpassword({ ...password, [name]: e.target.value });
      }
    }
    // there is start submit information to server
    function FormSubmit(e) {
      e.preventDefault();
      if (email.email) {
        axios
          .post("/changePass", email)
          .then((res) => {
            if (res.data === true) {
              setemail({ email: "" });
              setinputstate(4);
            } else {
              seterror("Use valid email");
            }
          })
          .catch((err) => {
            seterror("error occured");
          });
      } else if (number.number) {
        axios
          .post("/changePass", number)
          .then((res) => {
            if (res.data === true) {
              setnumber4({ number: "" });
              setinputstate(6);
            } else {
              seterror("use valid number");
            }
          })
          .catch((err) => {
            seterror("error occured");
          });
      } else if (password.password) {
        axios
          .post("/changePass", password)
          .then((res) => {
            if (res.data === true) {
              history.push("/login");
            } else {
              seterror("error occured");
            }
          })
          .catch((err) => {
            seterror("error occured");
          });
      }
    }
    // there is start input fields
    if (inputstate === 2) {
      // input email for change pass
      return (
        <form>
          <div class="form-group">
            <input
              id="login-password"
              class="input-material text-white myplaceholder"
              autoComplete="off"
              onChange={ChangeHandle}
              type="text"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <p className="text-danger">{err}</p>
          <button
            id="login"
            class="btn"
            style={{ background: "#e95f71" }}
            onClick={FormSubmit}
          >
            Submit
          </button>
        </form>
      );
    } else if (inputstate === 4) {
      return (
        <form method="get" class="form-validate">
          {" "}
          <div class="form-group">
            <input
              id="login-password"
              class="input-material text-white myplaceholder"
              autoComplete="off"
              onChange={ChangeHandle}
              type="text"
              name="number"
              placeholder="4 digit number"
            />
          </div>
          <p className="text-danger">{err}</p>
          <button
            id="login"
            class="btn"
            style={{ background: "#e95f71" }}
            onClick={FormSubmit}
          >
            Submit
          </button>
        </form>
      );
    } else if (inputstate === 6) {
      return (
        <form method="get" class="form-validate">
          {" "}
          <div class="form-group">
            <input
              id="login-password"
              class="input-material text-white myplaceholder"
              autoComplete="off"
              onChange={ChangeHandle}
              type="password"
              name="password"
              placeholder="New Password"
            />
          </div>
          <p className="text-danger">{err}</p>
          <button
            id="login"
            class="btn"
            style={{ background: "#e95f71" }}
            onClick={FormSubmit}
          >
            Submit
          </button>
        </form>
      );
    }
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
                      <h1>Change your account password</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 bg-white">
                <div class="form d-flex align-items-center">
                  <div class="content">
                    <InputFields />
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

export default Password;
