import React from "react";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import SearchBar from "./SearchBar";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({
  topics,
  displayAlert,
  getPhotosByTopic,
  toggleFavourites,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <SearchBar />
      <FavIcon
        selected={true}
        displayAlert={displayAlert}
        toggleFavourites={toggleFavourites}
      />
    </div>
  );
};

export default TopNavigation;
