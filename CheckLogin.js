const patient = require("./dbConn");
const CheckLogin = async (req, res) => {
  const token = req.cookies.HealthServices;
  try {
    const isdata = await patient.findOne({ tokens: token });
    const photo = isdata.photo;

    if (isdata && isdata.verifyEmail === true) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(photo));
      res.end();
    } else {
      res.end();
    }
  } catch (err) {
    res.end();
  }
};

module.exports = CheckLogin;
