import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li>
            <CartItem
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
