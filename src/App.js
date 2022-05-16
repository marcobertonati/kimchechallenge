import React from "react";
import "./App.css";

/* Modules */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

/* Containers */
import SearchCountries from "./containers/search.countries";

/*------------------*/

// Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <SearchCountries />
  </ApolloProvider>
);

export default App;
