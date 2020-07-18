import React, { FC } from 'react';

import { User } from '@generated';
import { useGetCurrentUser } from 'hooks';

import { MessageCard } from '../../components';
import { useGetAllMessages } from '../../hooks';

import './MessagesContainer.css';

export const MessagesContainer: FC = () => {
  const { loading, error, data } = useGetAllMessages();
  const currentUser: Partial<User> = useGetCurrentUser();

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
      <MessageCard message={message} />
    ));
  }

  return (
    <div className="MessagesContainer">
      <div className="messages">{renderMessages()}</div>
    </div>
  );
};
