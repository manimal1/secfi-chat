import { useContext } from "react";

import { NotificationContext } from "./NotificationContext";

export function useNotificationContext() {
  return useContext(NotificationContext);
}
