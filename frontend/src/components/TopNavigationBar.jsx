import React from "react";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import SearchBar from "./SearchBar";
import "../styles/TopNavigationBar.scss";

/**
 * This component renders the top navigation bar.
 * @param {Object} props
 * @param {Object[]} props.topics - an array of topics
 * @param {function} props.displayAlert - function to display an alert
 * @param {function} props.getPhotosByTopic - function to get photos by topic
 * @param {function} props.toggleFavourites - function to toggle whether the selected photo is a favourite or not
 * @param {function} props.setSearchTerm - function to set the search term
 * @param {string} props.searchTerm - the search term
 * @returns {JSX.Element}
 */

const TopNavigation = ({
  topics,
  displayAlert,
  getPhotosByTopic,
  toggleFavourites,
  setSearchTerm,
  searchTerm
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <FavIcon
        selected={true}
        displayAlert={displayAlert}
        toggleFavourites={toggleFavourites}
      />
    </div>
  );
};

export default TopNavigation;