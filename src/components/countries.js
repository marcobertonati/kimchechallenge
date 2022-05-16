// import React, { useEffect, useState } from "react";
// import { gql } from "apollo-boost";
// // import { Query } from "react-apollo";
// // import { useQuery } from "react-apollo";

// import { useQuery } from "@apollo/react-hooks";

// const GET_COUNTRIES = gql`
//   query Countries {
//     countries {
//       name
//       code
//       continent {
//         name
//       }
//       languages {
//         name
//       }
//       emoji
//       emojiU
//     }
//   }
// `;

// export default function SearchCountries() {
//   const [countriesByContinent, setCountriesByContinent] = useState([]);
//   const [countriesByLenguage, setCountriesByLenguage] = useState([]);
//   const { loading, error, data } = useQuery(GET_COUNTRIES);

//   /* This function take the vale of input and set states */
//   function onHandleChange() {
//     /* Take the value of the input a filter countriets that contain the characters of input */
//     const value = document.getElementById("input-search-country").value;
//     const filteredCountries = data.countries.filter((country) =>
//       country.name.toLowerCase().includes(value.toLowerCase())
//     );

//     // console.log(filteredCountries);

//     const countriesFilteredByContinent = filteredCountries.reduce(
//       (acc, country) => {
//         const continent = country.continent.name
//           .toLowerCase()
//           .replace(/ /g, "");
//         if (!acc[continent]) {
//           acc[continent] = [];
//           acc[continent].push(country);
//         } else {
//           acc[continent].push(country);
//         }
//         return acc;
//       },
//       {} // Initial value with a empty object
//     );

//     const arrCountriesByContinent = Object.entries(
//       countriesFilteredByContinent
//     );
//     setCountriesByContinent(arrCountriesByContinent);

//     const countriesFilteredByLenguage = filteredCountries.reduce(
//       (acc, country) => {
//         console.log("Filter by lenguage: ");
//         const lenguages = country.languages;

//         // console.log(lenguages);
//         // lenguages.forEach((element) => {
//         //   console.log(element);
//         // });

//         lenguages.forEach((lenguage) => {
//           if (!acc[lenguage.name]) {
//             acc[lenguage.name] = [];
//             acc[lenguage.name].push(country);
//           } else {
//             acc[lenguage.name].push(country);
//           }
//         });

//         return acc;

//         // if (!acc[lenguage]) {
//         //   acc[lenguage] = [];
//         //   acc[lenguage].push(country);
//         // } else {
//         //   acc[lenguage].push(country);
//         // }
//         // return acc;
//       },
//       {}
//     );

//     const arrCountriesByLenguages = Object.entries(countriesFilteredByLenguage);
//     setCountriesByLenguage(arrCountriesByLenguages);
//     console.log(countriesByLenguage);
//   }

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <>
//       <h1>Country search</h1>
//       <div>
//         <label for="input-search-country">Some random text:</label>
//         <input
//           name="input-search-country"
//           id="input-search-country"
//           type="text"
//           onChange={onHandleChange}
//         />
//       </div>

//       <h2>Group by continent</h2>

//       <div>
//         {countriesByContinent.map((continent) => {
//           return (
//             <>
//               <div>
//                 {continent[0].toUpperCase()}
//                 <br></br>
//                 {continent[1].map((country) => {
//                   return (
//                     <div>
//                       {/* <span>{country.emoji}</span> */}
//                       {/* <p style={{ fontFamily: "Arial" }}>{country.emojiU};</p> */}
//                       <p>{country.name}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//               <br></br>
//             </>
//           );
//         })}
//       </div>

//       <h2>Group by lenguage</h2>

//       <div>
//         {countriesByLenguage.map((lenguage) => {
//           return (
//             <>
//               <div>
//                 {lenguage[0].toUpperCase()}
//                 <br></br>
//                 {lenguage[1].map((country) => {
//                   return (
//                     <div>
//                       {/* <span>{country.emoji}</span> */}
//                       {/* <p style={{ fontFamily: "Arial" }}>{country.emojiU};</p> */}
//                       <p>{country.name}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//               <br></br>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// // const Countries = () => (
// //   <Query query={GET_COUNTRIES}>
// //     {({ loading, error, data }) => {
// //       if (loading) return <div>Loading...</div>;
// //       if (error) return <div>Error :( {console.log}</div>;

// //       return <div>{data.countryname}</div>;
// //     }}
// //   </Query>
// // );

// // export default Countries;
