import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favouritePhotos,
  addFavouritePhoto,
  removeFavouritePhoto,
  onOpenModal,
  showFavourites,
}) => {
  const displayedPhotos = showFavourites ? favouritePhotos : photos;
  return (
    <ul className="photo-list">
      {displayedPhotos.map((photo) => (
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
            isFavourite ? addFavouritePhoto(photo) : removeFavouritePhoto(photo)
          }
          onClick={() => onOpenModal(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
