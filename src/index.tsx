import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";
import { graphQLFacadeService } from "services/graphQLFacadeService";

import { NotificationProvider } from "providers";
import { RootContainer } from "containers";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <ApolloProvider client={graphQLFacadeService()}>
    <CssBaseline />
    <NotificationProvider>
      <RootContainer />
    </NotificationProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
