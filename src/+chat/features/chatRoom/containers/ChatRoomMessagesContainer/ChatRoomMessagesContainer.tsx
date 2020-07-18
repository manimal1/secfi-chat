import React, { FC } from 'react';

import { User } from '@generated';
import { useGetCurrentUser } from 'hooks';

import { ChatRoomMessage } from '../../components';
import { useGetAllMessages } from '../../hooks';

import './ChatRoomMessagesContainer.css';

export const ChatRoomMessagesContainer: FC = () => {
  const { loading, error, data } = useGetAllMessages();
  const currentUser: Partial<User> = useGetCurrentUser();

  // TODO: remove when routing is added
  if (!currentUser) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error loading messages!</div>;
  }
  const message = data?.Message;

  function renderMessages() {
    if (!data || !message) {
      return <div>No Messages!</div>;
    }

    return data?.Message.map((message: any) => (
      <ChatRoomMessage key={message.uuid} message={message} />
    ));
  }

  return (
    <div className="ChatRoomMessagesContainer">
      <div className="messages">{renderMessages()}</div>
    </div>
  );
};
