import React, { FC } from 'react';

import { ChatRoomRoute } from '+chat';

import { NotificationsContainer } from '../NotificationsContainer';

export const RootContainer: FC = () => (
  <main className="App">
    <ChatRoomRoute />
    <NotificationsContainer />
  </main>
);
