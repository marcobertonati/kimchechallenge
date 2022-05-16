import React from "react";

export default function Search({ onHandleChange }) {
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
    </>
  );
}
