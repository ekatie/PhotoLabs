import React, { useState } from "react";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, displayAlert, getPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;