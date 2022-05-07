const patient = require("./dbConn");

async function Profile(req, res) {
  try {
    const token = req.cookies.HealthServices;
    const isMatch = await patient.findOne({ tokens: token });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(isMatch));
    res.end();
  } catch (error) {
    res.end(error);
  }
}

module.exports = Profile;
