import React, { FC } from 'react';

import { ChatRoomMessagesContainer, ChatRoomFormContainer } from './containers';

import './ChatRoomRoute.css';

export const ChatRoomRoute: FC = () => {
  return (
    <section className="ChatRoomRoute">
      <ChatRoomMessagesContainer />
      <ChatRoomFormContainer />
    </section>
  );
};
