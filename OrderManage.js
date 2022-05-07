const stripe = require("stripe")(
  "sk_test_51K1tIQIP5TWVDrJVWJoU2eI6d8s2Jc5ZNMcQRXN27gEoAlmNPhr5zkYAAG4MhxVCv54Nudt1riWLmRLcyna1TSQ200KdQ0Vo5Z"
);
const { v4: uuidv4 } = require("uuid");
const patient = require("./dbConn");
const nodemailer = require("nodemailer");
function OrderManagement(req, res) {
  const idempotencyKey = uuidv4();
  const orderinfo = req.body;
  const userAmount = 100;
  const userAddress = req.body.address;
  const userMedicine = req.body.medicine;
  const userDose = req.body.dose;

  //nodmailer mail sender detail
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eastmedicalsystem@gmail.com",
      pass: "System...+++",
    },
  });

  return stripe.customers
    .create({
      email: orderinfo.email,
      source: orderinfo.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: 100 * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: orderinfo.email,
          description: `purchase of $(product.name)`,
          shipping: {
            name: orderinfo.card.name,
            address: {
              country: orderinfo.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => {
      const token = req.cookies.HealthServices;
      patient
        .findOne({ tokens: token })
        .then((isFiend) => {
          isFiend.order.amount = userAmount;
          isFiend.order.address = userAddress;
          isFiend.order.medicine = userMedicine;
          isFiend.order.dose = userDose;
          isFiend.save();
          //nodemailer body
          var mailOption = {
            from: "eastmedicalsystem@gmail.com",
            to: "mdkprogrammer@gmail.com",
            subject: "Order",
            html: `<h2>Name: ${isFiend.fullName} </h2>
            <p>Email: ${isFiend.email} </p>
            <p>Medicine: ${userMedicine} </p>
            <p>Amount: ${userAmount} </p>
            <p>Numver of Dose ${userDose} </p>
            <p>Address ${userAddress} </p>`,
          };

          //send email to user for verify
          transporter.sendMail(mailOption, function (error, info) {
            if (error) {
              res.end(error);
            } else {
              res.end("placed");
            }
          });
        })
        .catch(() => {
          res.end("error occured");
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = OrderManagement;
