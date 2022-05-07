import React from "react";
import Body from "./Body";
import { Link } from "react-router-dom";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import VerifiedIcon from "@mui/icons-material/Verified";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Togle from "./Togle";
import Togle2 from "./Togle 2";

//this for trigger home page
function HomePage() {
  //main function return
  return (
    <div>
      <header class="header">
        <nav class="navbar navbar-expand-lg text-white">
          <div class="container-fluid d-flex align-items-center justify-content-between">
            <div class="navbar-header">
              <a href="index.html" class="navbar-brand">
                <div class="brand-text brand-big visible text-uppercase">
                  <strong class="text-primary">East</strong>
                  <strong>Medical</strong>
                  <strong class="text-success">System</strong>
                </div>
              </a>
            </div>
            <div class="right-menu list-inline no-margin-bottom">
              <Togle2 />
            </div>
          </div>
        </nav>
      </header>
      <div class="d-flex align-items-stretch">
        <nav id="sidebar">
          <Togle />
          <br />
          <span class="heading text-white">Main</span>
          <ul class="list-unstyled text-white">
            <li class="active">
              <Link to="/">
                {" "}
                <i>
                  <HomeIcon />
                </i>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/price">
                {" "}
                <i>
                  <AttachMoneyIcon />
                </i>
                Prices{" "}
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                {" "}
                <i>
                  <ConnectWithoutContactIcon />
                </i>
                Contact-Us{" "}
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                {" "}
                <i>
                  <InfoIcon />
                </i>
                About-Us{" "}
              </Link>
            </li>
            <li>
              <a
                href="#exampledropdownDropdown"
                aria-expanded="false"
                data-toggle="collapse"
              >
                {" "}
                <i>
                  <AddBoxIcon />
                </i>
                Blogs{" "}
              </a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/admin">
                {" "}
                <i>
                  <AdminPanelSettingsIcon />
                </i>
                Admin{" "}
              </Link>
            </li>
          </ul>
          <span class="heading text-white">Information</span>
          <ul class="list-unstyled text-white">
            <li>
              {" "}
              <Link to="facilities">
                {" "}
                <i>
                  <VerifiedIcon />
                </i>
                Facilities{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/ourmission">
                {" "}
                <i>
                  <ViewHeadlineIcon />
                </i>
                Mission{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <Body />
      </div>
    </div>
  );
}

export default HomePage;
