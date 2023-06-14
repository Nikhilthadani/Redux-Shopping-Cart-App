import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const sendRequest = async () => {
      //Send state as Sending request
      dispatch(
        uiActions.showNotifications({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-7f98b-default-rtdb.firebaseio.com/cartitems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //Send state as Request is successful
      dispatch(
        uiActions.showNotifications({
          open: true,
          message: "Send a request to Database Successfully",
          type: "success",
        })
      );
    };
    sendRequest().catch((err) => {
      //send state as Error
      dispatch(
        uiActions.showNotifications({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    });
  }, [cart]);
  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
