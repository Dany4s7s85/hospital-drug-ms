const { text } = require("express");
const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/hospital";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema for mongodb
const PatientSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  tokens: {
    type: String,
  },
  passwordtoken: {
    type: String,
  },
  verifyEmail: {
    type: Boolean,
  },
  randomNumber: {
    type: Number,
  },
  order: {
    amount: {
      type: Number,
    },
    address: {
      type: String,
    },
    medicine: {
      type: String,
    },
    dose: {
      type: Number,
    },
  },
  photo: {
    type: String,
  },
});

const patient = mongoose.model("Patients", PatientSchema);

module.exports = patient;

const onlinedb =
  "mongodb://Dany4s7s85:Dany70085@cluster0-shard-00-00.eymaq.mongodb.net:27017,cluster0-shard-00-01.eymaq.mongodb.net:27017,cluster0-shard-00-02.eymaq.mongodb.net:27017/hospital?ssl=true&replicaSet=atlas-83pn3o-shard-0&authSource=admin&retryWrites=true&w=majority";