import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  const [profileData, setProfileData] = useState({});

  //add new profile image
  function setphoto(e) {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append("ProfileImage", photo);
    axios.post("/profileIng", formData).then().catch();
  }

  function GetProfileData() {
    axios
      .get("/profile")
      .then((response) => {
        if (!response.data || response.data.verifyEmail === false) {
          history.push("/login");
        } else {
          setProfileData(response.data);
        }
      })
      .catch((error) => {
        setProfileData(error);
      });
  }
  useEffect(() => {
    GetProfileData({});
  }, []);

  // check order placed or not
  function CheckOrder() {
    if (profileData.order) {
      return (
        <div>
          <p className="text-center h5">Order Info</p>
          <p>Medicine :{profileData.order.medicine}</p>
          <p>Dose :{profileData.order.dose}</p>
          <p>Amount :{profileData.order.amount}</p>
          <p>Address :{profileData.order.address}</p>
        </div>
      );
    } else {
      return <p></p>;
    }
  }

  return (
    <div className="d-flex row justify-content-md-center profileDive">
      <div className="p-5 profileDiv2" style={{ width: "500px" }}>
        <br />
        <div class="avatar">
          <form
            action="/profileIng+"
            method="post"
            enctype="multipart/form-data"
          >
            <label for="file-upload">
              <img
                src={profileData.photo}
                alt="..."
                class="img-fluid rounded-circle mx-auto d-block"
                style={{ width: "150px", height: "150px" }}
              />
              <input
                id="file-upload"
                className="fileInput"
                type="file"
                // accept=".png, .jpg, .jpeg"
                onChange={setphoto}
              />
            </label>
          </form>
        </div>
        <div>
          <p className="text-center h5">Personal Info</p>
          <p>Name: {profileData.fullName}</p>
          <p>Email: {profileData.email}</p>
          <CheckOrder />
        </div>
      </div>
    </div>
  );
}

export default Profile;
