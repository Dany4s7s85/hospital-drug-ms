const patient = require("./dbConn");

function verifyEmail(req, res) {
  const token = req.query.token;
  patient
    .findOne({ tokens: token })
    .then((havetoken) => {
      if (havetoken) {
        havetoken.tokens = null;
        havetoken.verifyEmail = true;
        havetoken.save();
        res.end("your account activated");
      }
    })
    .catch((error) => {
      res.end("err");
    });
}

module.exports = verifyEmail;
