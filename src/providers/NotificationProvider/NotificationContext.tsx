import React from 'react';

import { noop, Notification, ShowNotification } from 'types';

interface NotificationState {
  notifications: Notification[];
  first: Notification | null;
  showNotification: ShowNotification;
  removeNotification: () => void;
}

const initialState = {
  notifications: [],
  first: null,
  showNotification: noop,
  removeNotification: noop,
};

export const NotificationContext = React.createContext<NotificationState>(
  initialState
);
