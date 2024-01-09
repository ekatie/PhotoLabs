import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  favouritePhotos,
  addFavouritePhoto,
  removeFavouritePhoto,
  onOpenModal,
  showFavourites,
  filteredPhotos,
}) => {
  let displayedPhotos;
  if (showFavourites) {
    displayedPhotos = favouritePhotos;
  } else {
    displayedPhotos = filteredPhotos;
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
