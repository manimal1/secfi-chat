import React, { FC } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";

import { useNotificationContext } from "providers";
import { Notification, NotificationType } from "types";

import "./NotificationsContainer.css";

const getNotificationClass = (notification: Notification | null) => {
  if (!notification) {
    return "";
  }
  switch (notification.type) {
    case NotificationType.Success:
      return "success";
    case NotificationType.Error:
      return "error";
  }
};

export const NotificationsContainer: FC = () => {
  const { first, removeNotification } = useNotificationContext();

  return (
    <Snackbar
      className="NotificationsContainer"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={Boolean(first)}
      autoHideDuration={3000}
      onClose={() => removeNotification()}
    >
      <SnackbarContent
        className={getNotificationClass(first)}
        message={first ? first.text : ""}
      />
    </Snackbar>
  );
};
