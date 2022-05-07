import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

function Admin() {
  return (
    <div className="adminpage">
      <div className="text-white">
        <p>
          <h1>Oops!</h1> this page is private. Only admin can access that page.
          you can't access that page.
        </p>
        <Link className="linkStyle" to="/">
          <HomeIcon />
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default Admin;
