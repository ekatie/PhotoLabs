import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

/**
 * This component renders a photo in the list of photos.
 * @param {Object} props
 * @param {string} props.imageSource - the source of the image
 * @param {string} props.profile - the source of the user profile image
 * @param {string} props.username - the username of the user
 * @param {Object} props.location - the location of the user
 * @param {boolean} props.isFavourite - indicates whether the photo is a favourite or not
 * @param {function} props.onToggleFavourite - function to toggle whether the photo is a favourite or not
 * @param {function} props.onClick - function to open the modal
 * @returns {JSX.Element}
 */

const PhotoListItem = ({
  imageSource,
  profile,
  username,
  location,
  isFavourite,
  onToggleFavourite,
  onClick,
}) => {
  const handleToggleFavourite = (event) => {
    event.stopPropagation();
    onToggleFavourite(!isFavourite);
  };

  return (
    <li className="photo-list__item" onClick={onClick}>
      <PhotoFavButton
        isFavourite={isFavourite}
        onToggleFavourite={(event) => handleToggleFavourite(event)}
      />
      <img className="photo-list__image" src={imageSource} alt="photo" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={"User Profile"}
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;