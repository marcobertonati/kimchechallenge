import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./countries.group.css";

export default function CountriesByLenguage({ countries }) {
  return (
    <>
        {countries.map((lenguage) => {
          return (
            <>
              <Row>
                <h3>{lenguage[0].toUpperCase()} 💬</h3>
                {lenguage[1].map((country) => {
                  return (
                    <Col className="country-finded">
                      <p>{country.name}</p>
                    </Col>
                  );
                })}
              </Row>
              <br></br>
            </>
          );
        })}
    </>
  );
}
