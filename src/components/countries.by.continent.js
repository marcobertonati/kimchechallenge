import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./countries.group.css";

export default function CountriesByContinent({ countries }) {
  return (
    <>
      <div>
        {countries.map((continent) => {
          return (
            <>
              <Row>
                <h3>{continent[0].toUpperCase()}</h3>
                {continent[1].map((country) => {
                  return (
                    <Col>
                      {/* <span>{country.emoji}</span> */}
                      {/* <p style={{ fontFamily: "Arial" }}>{country.emojiU};</p> */}
                      <p>{country.name}</p>
                    </Col>
                  );
                })}
              </Row>
              <br></br>
            </>
          );
        })}
      </div>
    </>
  );
}
