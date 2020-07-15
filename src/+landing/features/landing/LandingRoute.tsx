import React, { FC } from "react";

import { useGetAllUsers } from "./hooks";

import "./LandingRoute.css";

export const LandingRoute: FC = () => {
  const { loading, error, data } = useGetAllUsers();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data);

  return <div className="LandingRoute">Landing Page here!</div>;
};
