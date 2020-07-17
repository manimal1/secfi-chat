import React, { FC } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import { User } from '@generated';
import { useGetCurrentUser } from 'hooks';
import { useGetAllMessages } from '../../hooks';

import './MessagesContainer.css';

dayjs.extend(localizedFormat);

export const MessagesContainer: FC = () => {
  const { loading, error, data } = useGetAllMessages();
  const currentUser: User = useGetCurrentUser();

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
      return <Card className="message-card">No Messages!</Card>;
    }

    return data?.Message.map((message: any) => (
      <Card key={message.uuid} className="message-card">
        <CardHeader
          avatar={
            <Avatar aria-label="user" className="message-avatar primary-color">
              {currentUser.username.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={currentUser?.username}
          subheader={dayjs(message.timestamp).format('LLLL')}
        />
        <CardContent>{message.text}</CardContent>
      </Card>
    ));
  }

  return <div className="MessagesContainer">{renderMessages()}</div>;
};
