import React from "react";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
