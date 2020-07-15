import React, { FC } from "react";

import { LandingRoute } from "+landing";

import { NotificationsContainer } from "../NotificationsContainer";

export const RootContainer: FC = () => (
  <main className="App">
    <LandingRoute />
    <NotificationsContainer />
  </main>
);
