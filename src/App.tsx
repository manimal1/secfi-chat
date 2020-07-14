import React, { FC } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";
import { graphQLFacadeService } from "services/graphQLFacadeService";

import { LandingRoute } from "+landing";

import "./App.css";

export const App: FC = () => (
  <>
    <CssBaseline />
    <ApolloProvider client={graphQLFacadeService()}>
      <main className="App">
        <LandingRoute />
      </main>
    </ApolloProvider>
  </>
);
