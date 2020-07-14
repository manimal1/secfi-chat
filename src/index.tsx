import React, { FC } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";
import { graphQLFacadeService } from "services/graphQLFacadeService";

import { LandingRoute } from "+landing";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
// import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ApolloProvider client={graphQLFacadeService()}>
      <main className="App">
        <LandingRoute />
      </main>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
