import React, { FC } from 'react';

import { useGetAllUsers } from './hooks';

import './ChatRoute.css';

export const ChatRoute: FC = () => {
  const { loading, error, data } = useGetAllUsers();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data);

  return <div className="ChatRoute">Chat Page here!</div>;
};
