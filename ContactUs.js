const nodemailer = require("nodemailer");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eastmedicalsystem@gmail.com",
    pass: "System...+++",
  },
});

function ContactInfo(req, res) {
  const contact = req.body;
  if (!contact.fullName || !contact.email || !contact.description) {
    res.end("All fields required");
  } else {
    var mailOption = {
      from: "eastmedicalsystem@gmail.com",
      to: "mdkprogrammer@gmail.com",
      subject: "East Medical System Support",
      html: ` <h2>User Reach to support</h2>
            <h4>Name: ${contact.fullName}</h4>
            <p>Email :${contact.email}</p>
            <p>Discription :${contact.description}</p>`,
    };

    //send email to user for verify
    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        res.end(error);
      } else {
        res.end("sent");
      }
    });
  }
}

module.exports = ContactInfo;
