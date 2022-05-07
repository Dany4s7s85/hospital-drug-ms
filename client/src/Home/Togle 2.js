import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import Logout from "@mui/icons-material/Logout";

function Header() {
  const [state, setstate] = useState(false);

  function TriggerHomeRoute() {
    axios
      .get("/checklogin")
      .then((response) => {
        if (response.data) {
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

  function HandleLogout() {
    axios
      .post("/logout")
      .then(() => {
        window.location.reload(true);
      })
      .catch();
  }

  //function for button routing
  function ButtonRouting() {
    if (state === true) {
      return (
        <div class="list-inline-item logout">
          {" "}
          <button
            id="logout"
            class="nav-link text-danger bg-transparent border-0"
            onClick={HandleLogout}
          >
            Logout{" "}
            <i>
              <Logout />
            </i>
          </button>
        </div>
      );
    } else {
      return (
        <Link to="/register" title="click to login">
          <button className=" rounded bg-success text-white px-3 py-1">
            Sign-Up
          </button>
        </Link>
      );
    }
  }

  //main function return
  return <ButtonRouting />;
}

export default Header;
