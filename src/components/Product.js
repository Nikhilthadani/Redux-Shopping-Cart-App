import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
