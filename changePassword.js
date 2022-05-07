const patient = require("./dbConn");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eastmedicalsystem@gmail.com",
    pass: "System...+++",
  },
});

async function ChangePass(req, res) {
  const id = req.body.id;
  // there is processing email for verify password
  if (id == 11) {
    const email = req.body.email;
    var tokens = jwt.sign(email, "qwertyuiop1234567890yhnbgt");
    const randomNumber = Math.floor(Math.random() * 10000 + 3);
    const isData = await patient.findOne({ email: email });
    isData.randomNumber = randomNumber;
    isData.passwordtoken = tokens;
    isData.save();
    res.cookie("HealthServices", tokens);

    //setup varification email for user
    var mailOption = {
      from: "eastmedicalsystem@gmail.com",
      to: req.body.email,
      subject: "Email varification",
      html: `<h2>Your verification code is ${randomNumber}</h2>
      <p>Enter 4 digit number on application then you can able to change password</p>`,
    };

    //send email to user for verify
    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        res.end(error);
      } else {
        res.end("true");
      }
    });
  }
  //processing random number
  else if (id == 22) {
    const ranNum = req.body.number;
    const token = req.cookies.HealthServices;

    const isdata = await patient.findOne({ passwordtoken: token });
    console.log(isdata.randomNumber);
    console.log(ranNum);
    if (isdata.randomNumber == ranNum) {
      console.log("number match");
      res.end("true");
    }
  }
  //change password
  else if (id == 33) {
    const newPassword = req.body.password;
    const token = req.cookies.HealthServices;

    const isdata = await patient.findOne({ passwordtoken: token });
    isdata.password = newPassword;
    isdata.save();
    res.end("true");
  } else {
    res.end();
  }
}

module.exports = ChangePass;
