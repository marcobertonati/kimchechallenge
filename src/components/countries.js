import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
// import { Query } from "react-apollo";
// import { useQuery } from "react-apollo";

import { useQuery } from "@apollo/react-hooks";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      continent {
        name
      }
      languages {
        name
      }
      emoji
    }
  }
`;

export default function Countries() {

  const [countriesByContinent, setCountriesByContinent] = useState([]);
  const [countriesByLenguage, setCountriesByLenguage] = useState([]);
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  /* This function take the vale of input and set states */
  function onHandleChange() {

    /* Take the value of the input a filter countriets that contain the characters of input */
    const value = document.getElementById("input-search-country").value;
    const filteredCountries = data.countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );

  
    const countriesFilteredByContinent = filteredCountries.reduce(
      (acc, country) => {
        const continent = country.continent.name
          .toLowerCase()
          .replace(/ /g, "");
        if (!acc[continent]) {
          acc[continent] = [];
          acc[continent].push(country.name);
        } else {
          acc[continent].push(country.name);
        }
        return acc;
      },
      {} // Initial value with a empty object
    );

    const arrCountriesByContinent = Object.entries(
      countriesFilteredByContinent
    );
    setCountriesByContinent(arrCountriesByContinent);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Country search</h1>
      <div>
        <label for="input-search-country">Some random text:</label>
        <input
          name="input-search-country"
          id="input-search-country"
          type="text"
          onChange={onHandleChange}
        />
      </div>
      <h2>Group by continent</h2>

      <div>
        {countriesByContinent.map((continent) => {
          return (
            <>
              <div>
                {continent[0].toUpperCase()}
                <br></br>
                {continent[1].map((country) => {
                  return (
                    <div>
                      <p>{country}</p>
                    </div>
                  );
                })}
              </div>
              <br></br>
            </>
          );
        })}
      </div>
    </>
  );
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
