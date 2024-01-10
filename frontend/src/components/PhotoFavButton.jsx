import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

/**
 * This component renders the favourite button for a photo.
 * @param {Object} props
 * @param {boolean} props.isFavourite - whether the photo is a favourite or not
 * @param {function} props.onToggleFavourite - function to toggle whether the photo is a favourite or not
 * @returns {JSX.Element}
 */

function PhotoFavButton({ isFavourite, onToggleFavourite }) {
  return (
    <div className="photo-list__fav-icon" onClick={onToggleFavourite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;