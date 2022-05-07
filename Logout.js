const patient = require("./dbConn");
async function LogoutSystem(req, res) {
  const token = req.cookies.HealthServices;

  const isdata = await patient.findOne({ tokens: token });
  isdata.tokens = "";
  isdata.save();
  res.end();
}

module.exports = LogoutSystem;
