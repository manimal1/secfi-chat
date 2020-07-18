import React, { FC } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Avatar, Card, CardHeader, CardContent } from '@material-ui/core';

import { Message } from '@generated';

import './ChatRoomMessage.css';

dayjs.extend(localizedFormat);

interface ChatRoomMessageProps {
  message: Partial<Message>;
}

export const ChatRoomMessage: FC<ChatRoomMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <Card className="ChatRoomMessage">
      <CardHeader
        avatar={
          <Avatar aria-label="user" className="message-avatar primary-color">
            {message && message.username
              ? message.username.slice(0, 1).toUpperCase()
              : 'U'}
          </Avatar>
        }
        title={message.username}
        subheader={dayjs(message.timestamp).format('LLLL')}
      />
      <CardContent>{message.text}</CardContent>
    </Card>
  );
};
