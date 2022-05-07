import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Contactus() {
  const history = useHistory();

  // state for responses
  const [respose, setresponse] = useState("");
  // useState hook use for Form data
  var [name, setname] = useState({
    fullName: "",
    email: "",
    description: "",
  });

  //this state use for response from server

  function inputValue(event) {
    console.log(event.target.value);
    setname({ ...name, [event.target.name]: event.target.value });
  }

  function SendForm(event) {
    event.preventDefault();

    axios
      .post("/contactus", name)
      .then((res) => {
        if (res.data === "sent") {
          history.push("/");
        } else {
          setresponse(res.data);
        }
      })
      .catch((err) => {
        setresponse("error accured");
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
                      <h1>Contact Support</h1>
                    </div>
                    <p>
                      We are here to provide you any information. just leave a
                      message we will reach you soon as posible
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
                          class="input-material text-white myplaceholder"
                          placeholder="Name"
                          type="text"
                          name="fullName"
                          autoComplete="off"
                          value={name.fname}
                          onChange={inputValue}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="login-username"
                          type="text"
                          name="email"
                          class="input-material text-white myplaceholder"
                          placeholder="Email"
                          autoComplete="off"
                          value={name.email}
                          onChange={inputValue}
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          className="textArea text-white"
                          placeholder="Discription"
                          name="description"
                          autoComplete="off"
                          value={name.description}
                          onChange={inputValue}
                        />
                      </div>
                      <p className="text-danger">{respose}</p>
                      <button
                        id="login"
                        href="index.html"
                        class="btn"
                        style={{ background: "#e95f71" }}
                        onClick={SendForm}
                      >
                        Submit
                      </button>
                    </form>
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

export default Contactus;
