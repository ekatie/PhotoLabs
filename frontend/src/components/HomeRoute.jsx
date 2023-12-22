import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  onOpenModal,
  favouritePhotos,
  displayAlert,
  addFavouritePhoto,
  removeFavouritePhoto,
  toggleDisplayAlert,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} displayAlert={displayAlert} />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        addFavouritePhoto={(photo) => addFavouritePhoto(photo)}
        removeFavouritePhoto={(photo) => removeFavouritePhoto(photo)}
        onToggleIcon={toggleDisplayAlert}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default HomeRoute;
