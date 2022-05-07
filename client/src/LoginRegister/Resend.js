import { Link } from "react-router-dom";
import React from "react";

function Resend() {
  return (
    <div className="adminpage text-white">
      <div className="myClass">
        <div>
          <h1 className="text-center">Wellcome</h1>
          <p>
            We sent you a verification email. Check your email that you provided
            for Sign-Up. Open email and click on link. When you recieve a
            message "your account activated" then Click on Login Button that
            provided there. Login to east medical system and access our
            services.
          </p>
          <Link to="/login">
            <button className="rounded bg-primary text-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resend;
