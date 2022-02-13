import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(cartActions.setSowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCartHandler}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
