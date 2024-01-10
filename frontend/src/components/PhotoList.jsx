import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

/**
 * This component renders a list of photos.
 * @param {Object} props
 * @param {Object[]} props.favouritePhotos - an array of favourite photos
 * @param {function} props.addFavouritePhoto - function to add a photo to the list of favourites
 * @param {function} props.removeFavouritePhoto - function to remove a photo from the list of favourites
 * @param {function} props.onOpenModal - function to open the modal
 * @param {boolean} props.showFavourites - indicates whether the list of photos to be displayed is the list of favourites or not
 * @param {Object[]} props.filteredPhotos - an array of photos that match the search term
 * @param {Object[]} props.photos - an array of photos
 * @returns {JSX.Element}
 */

const PhotoList = ({
  favouritePhotos,
  addFavouritePhoto,
  removeFavouritePhoto,
  onOpenModal,
  showFavourites,
  filteredPhotos,
  photos,
}) => {

  let displayedPhotos;
  if (showFavourites) {
    displayedPhotos = favouritePhotos;
  } else if (filteredPhotos) {
    displayedPhotos = filteredPhotos;
  } else {
    displayedPhotos = photos;
  }

  return (
    <ul className="photo-list">
      {displayedPhotos.length > 0 ? (
        displayedPhotos.map((photo) => (
          <PhotoListItem
            key={photo.id}
            imageSource={photo.urls.regular}
            profile={photo.user.profile}
            username={photo.user.username}
            location={photo.location}
            isFavourite={favouritePhotos.some(
              (favPhoto) => favPhoto.id === photo.id
            )}
            onToggleFavourite={(isFavourite) =>
              isFavourite
                ? addFavouritePhoto(photo)
                : removeFavouritePhoto(photo)
            }
            onClick={() => onOpenModal(photo)}
          />
        ))
      ) : (
        <p className="error">Sorry - no photos match your search.</p>
      )}
    </ul>
  );
};

export default PhotoList;