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
  getPhotosByTopic,
  toggleFavourites,
  showFavourites,
  setSearchTerm,
  searchTerm,
  filteredPhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        displayAlert={displayAlert}
        getPhotosByTopic={getPhotosByTopic}
        toggleFavourites={toggleFavourites}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        addFavouritePhoto={(photo) => addFavouritePhoto(photo)}
        removeFavouritePhoto={(photo) => removeFavouritePhoto(photo)}
        onToggleIcon={toggleDisplayAlert}
        onOpenModal={onOpenModal}
        showFavourites={showFavourites}
        filteredPhotos={filteredPhotos}
      />
    </div>
  );
};

export default HomeRoute;
