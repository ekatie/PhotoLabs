import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ imageSource, profile, username, location, isFavourite, onToggleFavourite }) => {

  const handleToggleFavourite = () => {
    onToggleFavourite(!isFavourite);
  }

return (
  <li className="photo-list__item">
    <PhotoFavButton 
    isFavourite={isFavourite}
    onToggleFavourite={handleToggleFavourite}
    />
    <img className="photo-list__image" src={imageSource} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
      <div className="photo-list__user-info">
        <p>{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  </li>
);
}

export default PhotoListItem;