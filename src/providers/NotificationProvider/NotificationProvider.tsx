import React, { FC, useState } from 'react';
import isEqual from 'lodash/isEqual';

import { Notification, NotificationType } from 'types';

import { NotificationContext } from './NotificationContext';

export const NotificationProvider: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [first, setFirst] = useState<Notification | null>(null);

  function showNotification(type: NotificationType, text: string) {
    const next: Notification = {
      text,
      type,
    };
    const prev = notifications[notifications.length - 1];
    if (prev && isEqual(prev, next)) {
      return;
    }
    const newNotifications = [...notifications, next];
    setNotifications(newNotifications);
    setFirst(newNotifications[0]);
  }

  function removeNotification() {
    const newNotifications = notifications.slice(1);
    setNotifications(newNotifications);
    setFirst(newNotifications[0]);
  }

  const contextValue = {
    notifications,
    first,
    showNotification,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
