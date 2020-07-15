import React, { FC } from 'react';

import { ChatRoute } from '+chat';

import { NotificationsContainer } from '../NotificationsContainer';

export const RootContainer: FC = () => (
  <main className="App">
    <ChatRoute />
    <NotificationsContainer />
  </main>
);
