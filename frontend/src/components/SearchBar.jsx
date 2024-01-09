import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;