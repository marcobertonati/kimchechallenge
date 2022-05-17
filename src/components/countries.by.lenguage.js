import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./countries.group.css";

export default function CountriesByLenguage({ countries }) {
  return (
    <>
      <div>
        {countries.map((lenguage) => {
          return (
            <>
              <Row>
                <h3>{lenguage[0].toUpperCase()}</h3>
                {lenguage[1].map((country) => {
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
