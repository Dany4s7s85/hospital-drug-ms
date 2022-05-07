const patient = require("./dbConn");
async function AddNewPic(req, res) {
  const token = req.cookies.HealthServices;
  const isdata = await patient.findOne({ tokens: token });
  isdata.photo = "../profileImages/" + req.file.originalname;
  isdata.save();
}

module.exports = AddNewPic;
