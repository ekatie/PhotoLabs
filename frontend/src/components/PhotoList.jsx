import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favouritePhotos, onAddFavourite, onRemoveFavourite}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          isFavourite={favouritePhotos.includes(photo.id)}
          onToggleFavourite={(isFavourite) => isFavourite ? onAddFavourite(photo) : onRemoveFavourite(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;