import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        className="search-input"
        type="text"
        placeholder="search a note..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
