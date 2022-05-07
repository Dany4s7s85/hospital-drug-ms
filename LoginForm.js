const jwt = require("jsonwebtoken");
const patient = require("./dbConn");
const dotenv = require("dotenv");
dotenv.config({ path: "./env" });

const myKey = process.env.TOKEN_KEY;
function LoginPatient(req, res) {
  const data = req.body;

  const { email, password } = data;
  if (!email || !password) {
    res.end("Both fields required");
  } else {
    patient
      .findOne({ email: email })
      .then((isEmail) => {
        if (isEmail.password === password) {
          const tokens = jwt.sign(email, "qwertyuiop1234567890");
          isEmail.tokens = tokens;
          isEmail.save();
          res.cookie("HealthServices", tokens);
          res.end("login");
        } else {
          res.end("invalid email or password");
        }
      })
      .catch((error) => {
        res.end("Oops! error:500 anything went wrong");
      });
  }
}

module.exports = LoginPatient;
