import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

/**
 * This component renders the home route. It contains the top navigation bar and the photo list.
 * @param {Object} props
 * @param {Object[]} props.topics - an array of topics
 * @param {Object[]} props.photos - an array of photos
 * @param {function} props.onOpenModal - function to open the modal
 * @param {Object[]} props.favouritePhotos - an array of favourite photos
 * @param {function} props.displayAlert - function to display an alert
 * @param {function} props.addFavouritePhoto - function to add a photo to the list of favourites
 * @param {function} props.removeFavouritePhoto - function to remove a photo from the list of favourites
 * @param {function} props.toggleDisplayAlert - function to toggle whether the alert is displayed or not
 * @param {function} props.getPhotosByTopic - function to get photos by topic
 * @param {function} props.toggleFavourites - function to toggle whether the selected photo is a favourite or not
 * @param {boolean} props.showFavourites - indicates whether the list of photos to be displayed is the list of favourites or not
 * @param {function} props.setSearchTerm - function to set the search term
 * @param {string} props.searchTerm - the search term
 * @param {Object[]} props.filteredPhotos - an array of photos that match the search term
 * @returns {JSX.Element}
 */

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