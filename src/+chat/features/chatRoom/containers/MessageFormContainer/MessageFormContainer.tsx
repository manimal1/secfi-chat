import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from '@material-ui/core';

import { useGetCurrentUser } from 'hooks';

import { useCreateMessage } from '../../hooks';

import './MessageFormContainer.css';

export const MessageFormContainer: FC = () => {
  const [creatMessageMutate] = useCreateMessage();
  const currentUser = useGetCurrentUser();

  if (!currentUser) {
    return null;
  }

  function onSubmit({ text }: { text: string }) {
    const message = {
      text,
      username: currentUser.username,
      user_uuid: currentUser.uuid,
    };
    console.log('m: ', message);
    creatMessageMutate({ message });
  }

  return (
    <div className="MessageFormContainer">
      <h2>Write New Message here:</h2>
      <Form
        initialValues={{ text: '' }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="message-form" onSubmit={handleSubmit}>
            <Field
              name="text"
              placeholder="write message"
              component="input"
              className="message-form-input"
              required
            />
            <Button
              type="submit"
              variant="contained"
              className="message-form-button"
            >
              Send Message
            </Button>
          </form>
        )}
      />
    </div>
  );
};
