import { useState, useEffect } from "react";
import React from "react";

const Right = ({ item }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [item]);

  const totalAmount = () => {
    let price = 0;
    item.map((item) => {
      price += item.price.cost;
    });
    setPrice(price);
  };

  return (
    <div className="right_buy">
      <div className="cost_right">
        <p>
          Your order is eligible for FREE Delivery. <br />
          <span style={{ color: "#565959" }}>
            Select this option at checkout. Details
          </span>
        </p>
        <h3>
          Subtotal ({item.length} items):
          <span style={{ fontWeight: "700" }}> {price}.00</span>
        </h3>
        <button className="rightbuy_btn">Proceed to Buy</button>
        <div className="emi">Esewa available</div>
        {/* <h3>
        Subtotal ({iteam.length} items):{" "}
        <span style={{ fontWeight: "700" }}> ₹{price}.00</span>
      </h3>
      <button className="rightbuy_btn" onClick={proceesby}>
        Proceed to Buy
      </button>
      <div className="emi" onClick={() => setVal(!val)}>
        Emi available
        {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <span className={val ? "show" : "hide"}>
        {" "}
        Your order qualifies for EMI with valid credit cards (not available on
        purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
        Learn more
      </span> */}
      </div>
    </div>
  );
};

export default Right;
