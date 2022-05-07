import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [state, setstate] = useState(false);
  const [photo, setphoto] = useState("");

  function TriggerHomeRoute() {
    axios
      .get("/checklogin")
      .then((response) => {
        if (response.data) {
          setphoto(response.data);

          setstate(true);
        } else {
          setstate(false);
        }
      })
      .catch((error) => {
        setstate(false);
      });
  }
  useEffect(() => {
    TriggerHomeRoute();
  });

  //function for button routing
  function ButtonRouting() {
    if (state === true) {
      return (
        <Link
          to="/profile"
          class="sidebar-header d-flex align-items-center text-white"
        >
          <div class="avatar">
            <img
              src={photo}
              alt="..."
              class="img-fluid rounded-circle"
              style={{ width: "45px", height: "45px" }}
            />
          </div>
          <div class="title">
            <h1 class="h5 text-white">You</h1>
            <p>@username</p>
          </div>
        </Link>
      );
    } else {
      return (
        <Link to="/login" title="click to login" className="p-5">
          <button className=" rounded bg-success text-white px-3 py-1">
            Login
          </button>
        </Link>
      );
    }
  }

  //main function return
  return <ButtonRouting />;
}

export default Header;
