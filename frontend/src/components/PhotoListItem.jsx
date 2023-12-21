import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ imageSource, profile, username, location, isFavourite, onToggleFavourite, onClick }) => {

  const handleToggleFavourite = (event) => {
    event.stopPropagation();
    onToggleFavourite(!isFavourite);
  }

return (
  <li className="photo-list__item" onClick={onClick}>
    <PhotoFavButton 
    isFavourite={isFavourite}
    onToggleFavourite={(event) => handleToggleFavourite(event)}
    />
    <img className="photo-list__image" src={imageSource} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} alt={"User Profile"} />
      <div className="photo-list__user-info">
        <p>{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  </li>
);
}

export default PhotoListItem;