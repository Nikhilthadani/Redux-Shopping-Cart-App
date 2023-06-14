import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const Notification = ({ type, message }) => {
  const notification = useSelector((state) => state.ui.notification);
  return (
    <div>
      {notification.open && (
        <Alert onClose={handleC} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
