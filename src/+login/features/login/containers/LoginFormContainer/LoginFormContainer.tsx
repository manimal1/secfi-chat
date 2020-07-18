import { Form, Field } from 'react-final-form';
import React, { FC } from 'react';
import get from 'lodash/get';
import { Button, Card, CardContent } from '@material-ui/core';

import { currentUserVar } from 'services';
import { setItem } from 'utils';

import { useCreateUser, useUpdateUser } from '../../hooks';

import './LoginFormContainer.css';

export const LoginFormContainer: FC = () => {
  const [creatUserMutate] = useCreateUser();
  const [updateUserMutate] = useUpdateUser();

  async function onSubmit({ username }: { username: string }) {
    const { data } = await creatUserMutate({ username: username });
    const newUser = get(data, 'insert_User.returning[0]');
    // this mutation updates User last_seen column in Hasura table
    updateUserMutate({ userUuid: newUser.uuid });
    // TODO: remove setting newUser to cache and localStorage when auth is setup
    currentUserVar(newUser);
    setItem('username', newUser.username);
    setItem('userUuid', newUser.uuid);
  }

  return (
    <div className="LoginForm">
      <Card className="login-card">
        <h2>Please login to chat</h2>
        <CardContent>
          <Form
            initialValues={{ username: '' }}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form className="login-form" onSubmit={handleSubmit}>
                <Field
                  name="username"
                  placeholder="Add username"
                  component="input"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="login-button"
                >
                  Create User
                </Button>
              </form>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
};
