import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function ErrPage() {
  return (
    <div className="adminpage">
      <div className="text-white">
        <p>
          <h1>Oops!</h1> error 404 .......... page not found
        </p>
        <Link className="linkStyle" to="/">
          <HomeIcon />
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrPage;
