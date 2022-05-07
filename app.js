const express = require("express");
const app = express();
const patient = require("./dbConn");
const cors = require("cors");
const LoginPatient = require("./LoginForm");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { formValidation, findEmail, savePatient } = require("./SignUpForm");
const verifyEmail = require("./emailVerify");
const CheckLogin = require("./CheckLogin");
const OrderManagement = require("./OrderManage");
const ContactInfo = require("./ContactUs");
const Profile = require("./ProfileData");
const ChangePass = require("./changePassword");
const AddNewPic = require("./AddProfile");
const LogoutSystem = require("./Logout");
var path = require("path");
const multer = require("multer");

app.use(cookieParser());
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 1000000 })
);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

//set Storage for profile images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/profileImages/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//this is for rendring page on Home
app.get("/checklogin", CheckLogin);

// route for order palacement and payments.
app.post("/orders", OrderManagement);

//this is for verify email of patient or user
app.get("/verified", verifyEmail);

//provide patient profile data from database
app.get("/profile", Profile);

//register a patient
app.post("/register", formValidation, findEmail, savePatient);

//login patient
app.post("/login", LoginPatient);

//add new profile image
app.post("/profileIng", upload.single("ProfileImage"), AddNewPic);

//change password
app.post("/changePass", ChangePass);

//contact-us page information sent
app.post("/contactus", ContactInfo);

//logout from system
app.post("/logout", LogoutSystem);

//this is for heroku don,t touch
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function () {
  console.log("listen port 5000");
});
