import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data: { imageSource, profile, username, location } }) => (
  <article className="photo-list__item">
    <PhotoFavButton/>
    <img className="photo-list__image" src={imageSource} alt="photo" />

    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
      <div className="photo-list__user-info">
        <p>{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  </article>
);


export default PhotoListItem;