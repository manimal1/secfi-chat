import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import get from 'lodash/get';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { currentUserVar } from 'services';
import { setItem } from 'utils';

import { useCreateUser, useUpdateUser } from '../../hooks';

import './LoginFormContainer.css';

export const LoginFormContainer: FC = () => {
  const [creatUserMutate] = useCreateUser();
  const [updateUserMutate] = useUpdateUser();

  async function handleSubmit({ username }: { username: string }) {
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
          <Formik
            initialValues={{ username: '' }}
            validate={(values) => {
              const errors = { username: '' };
              if (!values.username) {
                errors.username = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  values.username
                )
              ) {
                errors.username =
                  'Invalid username. Must use standard characters and be unique!';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 1));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <Field type="text" name="username" />
                <ErrorMessage name="email" component="div" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="login-button"
                  onClick={() => handleSubmit({ username: values.username })}
                >
                  Create User
                </button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};
