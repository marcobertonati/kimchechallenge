import React from "react";
import { gql } from "apollo-boost";
// import { Query } from "react-apollo";
// import { useQuery } from "react-apollo";

import { useQuery } from "@apollo/react-hooks";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
    }
  }
`;

function searchByContinent (data){ 
    const GET_COUNTRIES_BY_CONTINENT = gql`
    query 
    `
}

export default function Countries() {
  //   const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.countries.map(({ name }) => (
    <div key={name}>
      <p>
        {name}: {name}
      </p>
    </div>
  ));
}

// const Countries = () => (
//   <Query query={GET_COUNTRIES}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error :( {console.log}</div>;

//       return <div>{data.countryname}</div>;
//     }}
//   </Query>
// );

// export default Countries;
