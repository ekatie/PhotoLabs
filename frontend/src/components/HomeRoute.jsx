import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import '../styles/HomeRoute.scss'

const HomeRoute = ({topics, photos}) => {
  console.log(photos)
return (
  <div className="home-route">
  <TopNavigation topics={topics}/>
  <PhotoList photos={photos}/>
  </div>
)
};

export default HomeRoute;