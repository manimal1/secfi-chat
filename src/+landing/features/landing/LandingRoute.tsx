import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GetAllUsersDocument } from "@generated/facadeClient";

// import { GET_ALL_USERS } from "./hooks";

import "./LandingRoute.css";

export const LandingRoute: FC = () => {
  const { loading, error, data } = useQuery(GetAllUsersDocument);
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
