import React from "react";
import "../styles/SearchBar.scss";

/**
 * This component renders the search bar.
 * @param {Object} props
 * @param {function} props.setSearchTerm - function to set the search term
 * @param {string} props.searchTerm - the search term
 * @returns {JSX.Element}
 */

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