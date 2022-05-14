import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import gql from "apollo-boost";
import InMemoryCache from "apollo-boost";

import { ApolloProvider } from "@apollo/react-hooks";

import Countries from "./components/countries";

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io",

  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <Countries />
  </ApolloProvider>
);
export default App;
