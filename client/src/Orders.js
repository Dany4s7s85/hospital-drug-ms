import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const history = useHistory();
  const [medicine, setmedicine] = useState("");
  const [dose, setdose] = useState("");
  const [address, setaddress] = useState("");
  function PostOrder(token) {
    const detail = { medicine, dose, address };
    const order = { ...token, ...detail };
    axios
      .post("orders", order)
      .then((response) => {
        if (response.data === "placed") {
          history.push("/");
        }
      })
      .then(() => {
        console.log("error occured");
      });
  }

  function GetMedicine(event) {
    const usermedicine = event.target.value;
    setmedicine(usermedicine);
  }
  function GetDose(event) {
    const userdose = event.target.value;
    setdose(userdose);
  }
  function GetAddress(event) {
    const useraddress = event.target.value;
    setaddress(useraddress);
  }

  return (
    <div className="orderpage">
      <br />
      <div>
        <h1 className="text-center text-white">Order Now</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="myClass">
        <div className="backgroundColor" style={{ width: "300px" }}>
          <input
            autoComplete="off"
            placeholder="Name of Medicine"
            className="my-3 rounded"
            onChange={GetMedicine}
            value={medicine}
          />
          <input
            className="my-3 rounded"
            autoComplete="off"
            onChange={GetDose}
            value={dose}
            placeholder="Number of Dose"
          />
          <input
            autoComplete="off"
            placeholder="Enter full address"
            className="my-3 rounded"
            onChange={GetAddress}
          />
          <br />
          <StripeCheckout
            className="text-black"
            amount={100 * 100}
            name={medicine}
            stripeKey="pk_test_51K1tIQIP5TWVDrJVsNX1c6SUiayRpOmA8B74I4CWxGmDLmmJFp6uESkTmpyZhh5pePBzMOKAF4OKDGdmvk20eT8p00kDQnga3i"
            token={PostOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
