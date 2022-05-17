import React, { useEffect, useState } from "react";

/* Components */
import Search from "../components/search";
import CountriesByContinent from "../components/countries.by.continent";
import CountriesByLenguage from "../components/countries.by.lenguage";

/* Boostrap css */
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.container.css";

/* Bootstrap components */
import { Container, Row, Col, Button } from "react-bootstrap";

/* Apollo modules */
import { useQuery } from "@apollo/react-hooks";

/* Graphql Query */
import { GET_COUNTRIES } from "../graphql/index.schema";

export default function SearchCountries() {
  /* Countries by continent & lenguages */
  const [countriesByContinent, setCountriesByContinent] = useState([]);
  const [countriesByLenguage, setCountriesByLenguage] = useState([]);

  /* Set the component showed by clicking buttons */
  const [showGroup, setShowGroup] = useState("0");

  /* Graphql Query */
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  /* This function take the value of input and set states */
  function onHandleChange() {
    /* Take the value of the input a filter countriets that contain the characters of input */
    const value = document.getElementById("input-search-country").value;
    const filteredCountries = data.countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );

    /* COUNTRIES BY CONTINENT */
    const countriesFilteredByContinent = filteredCountries.reduce(
      (acc, country) => {
        const continent = country.continent.name
          .toLowerCase()
          .replace(/ /g, "");
        if (!acc[continent]) {
          acc[continent] = [];
          acc[continent].push(country);
        } else {
          acc[continent].push(country);
        }
        return acc;
      },
      {} // Initial value with a empty object
    );

    const arrCountriesByContinent = Object.entries(
      countriesFilteredByContinent
    );
    setCountriesByContinent(arrCountriesByContinent);

    /* COUNTRIES BY LENGUAGE */
    const countriesFilteredByLenguage = filteredCountries.reduce(
      (acc, country) => {
        const lenguages = country.languages;
        lenguages.forEach((lenguage) => {
          if (!acc[lenguage.name]) {
            acc[lenguage.name] = [];
            acc[lenguage.name].push(country);
          } else {
            acc[lenguage.name].push(country);
          }
        });
        return acc;
      },
      {} // Initial value with a empty object
    );

    const arrCountriesByLenguages = Object.entries(countriesFilteredByLenguage);
    setCountriesByLenguage(arrCountriesByLenguages);
  }

  /*Function that set the group to show */
  function onHandleClick(event) {
    setShowGroup(event.target.value);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container className="search-container">
      <Row className="search-container-box">
        <Col>
          <Search onHandleChange={onHandleChange} />
          <Row className="group-by">
            <Col xs="4" md="2">
              <h4>Group by: </h4>
            </Col>
            <Col xs="4" md="5">
              <Button
                id="btn-continent"
                onClick={onHandleClick}
                value="0"
                variant="outline-light"
              >
                by Continent{" "}
                {countriesByContinent.length === 0 ? (
                  ""
                ) : (
                  <span> : {countriesByContinent.length}</span>
                )}
              </Button>
            </Col>
            <Col xs="4" md="5">
              <Button
                id="btn-lenguage"
                onClick={onHandleClick}
                value="1"
                variant="outline-light"
              >
                by Lenguage{" "}
                {countriesByLenguage.length === 0 ? (
                  ""
                ) : (
                  <span> : {countriesByLenguage.length}</span>
                )}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="search-container-box">
        <Col>
          {showGroup === "0" ? (
            <CountriesByContinent countries={countriesByContinent} />
          ) : (
            <CountriesByLenguage countries={countriesByLenguage} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
