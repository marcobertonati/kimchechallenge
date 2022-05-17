import React from "react";
import "./search.css";

export default function Search({ onHandleChange }) {
  return (
    <>
      <h1>COUNTRY SEARCH</h1>
      <div>
        <div>
          <label for="input-search-country">Some random text:</label>
        </div>
        <div className="box-search">
          <span>🔎</span>
          <span>
            <input
              name="input-search-country"
              id="input-search-country"
              type="text"
              onChange={onHandleChange}
            />
          </span>
        </div>
      </div>
    </>
  );
}
