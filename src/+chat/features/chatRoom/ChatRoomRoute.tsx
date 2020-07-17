import React, { FC, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import get from 'lodash/get';

import { User } from '@generated';
import { useCreateUser, useUpdateUser } from './hooks';
import { MessagesContainer } from './containers';

import './ChatRoomRoute.css';

export const ChatRoomRoute: FC = () => {
  const [creatUserMutate] = useCreateUser();
  const [updateUserMutate] = useUpdateUser();
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    if (user) {
      updateUserMutate({ userUuid: user.uuid });
    }
  }, [user]);

  console.log({ user });

  async function handleCreateUser({ username }: { username: string }) {
    const { data } = await creatUserMutate({ username: username });
    const newUser = get(data, 'insert_User.returning[0]');
    setUser(newUser);
  }

  return (
    <>
      {!user && (
        <Button
          variant="contained"
          onClick={() => handleCreateUser({ username: 'test1' })}
        >
          Create User
        </Button>
      )}
      <MessagesContainer user={user} />
    </>
  );
};
