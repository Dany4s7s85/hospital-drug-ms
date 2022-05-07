const patient = require("./dbConn");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eastmedicalsystem@gmail.com",
    pass: "System...+++",
  },
});

// velidate Patient information
function formValidation(req, res, next) {
  const data = req.body;

  const { fullName, email, password } = data;

  if (!fullName || !email || !password) {
    res.end("All fields required");
  } else if (!validator.isEmail(email)) {
    res.end("Invalid email");
  } else {
    next();
  }
}

//check email in database
function findEmail(req, res, next) {
  const email = req.body.email;
  patient
    .findOne({ email: email })
    .then((isEmail) => {
      if (isEmail) {
        res.end("email already exist");
      } else {
        next();
      }
    })
    .catch(() => {
      console.log("oops 500 anything went wrong");
    });
}

function savePatient(req, res) {
  const { fullName, email, password } = req.body;
  var tokens = jwt.sign(email, "qwertyuiop1234567890");
  const verifyEmail = false;
  const order = { amount: "", address: "", medicine: "", dose: "" };
  const photo = "BlackProfile.jpg";
  const randomNumber = null;

  registerPatient = {
    fullName,
    email,
    password,
    tokens,
    verifyEmail,
    order,
    photo,
    randomNumber,
  };
  const newPatient = new patient(registerPatient);
  newPatient.save();
  res.cookie("HealthServices", tokens);

  //setup varification email for user
  var mailOption = {
    from: "eastmedicalsystem@gmail.com",
    to: req.body.email,
    subject: "Email varification",
    html: `<h2>Hello, ${fullName} </h2>
              <p>this email only for verification click on <br /><a href="http://${req.headers.host}/verified?token=${tokens}"><br />Click Me</a> for activating your account
              and then login. you can able to access our services. </p>`,
  };

  //send email to user for verify
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      res.end(error);
    } else {
      res.end("register");
    }
  });
}

module.exports = { formValidation, findEmail, savePatient };
