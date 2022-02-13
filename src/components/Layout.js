import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
const Layout = () => {
  let total = 100;

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
