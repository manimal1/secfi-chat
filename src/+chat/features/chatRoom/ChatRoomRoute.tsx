import React, { FC } from 'react';

import { MessagesContainer, MessageFormContainer } from './containers';

import './ChatRoomRoute.css';

export const ChatRoomRoute: FC = () => {
  return (
    <section className="ChatRoomRoute">
      <MessagesContainer />
      <MessageFormContainer />
    </section>
  );
};
