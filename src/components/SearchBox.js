import React from "react";
import "./SearchBox.css";

function SearchBox({ setSearchField }) {
  const fieldChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="searchBox">
      <input
        className="searchBox__input"
        type="search"
        placeholder={"type sth to search a specific user"}
        onChange={fieldChange}
      />
    </div>
  );
}

export default SearchBox;
