import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <div className='cartIcon'>
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
