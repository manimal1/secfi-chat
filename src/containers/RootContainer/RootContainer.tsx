import React, { FC } from 'react';

import { ChatRoomRoute } from '+chat';
import { LoginRoute } from '+login';

import { NotificationsContainer } from '../NotificationsContainer';

export const RootContainer: FC = () => (
  <main className="App">
    <LoginRoute />
    <ChatRoomRoute />
    <NotificationsContainer />
  </main>
);
