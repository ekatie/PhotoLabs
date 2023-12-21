import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ isModalOpen, onClose, photo, photos }) => {
  if (!isModalOpen || !photo) return null;

  const { imageSource, profile, username, location } = photo;

  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close" />
        </button>
        <PhotoFavButton
        // isFavourite={isFavourite}
        // onToggleFavourite={(event) => handleToggleFavourite(event)}
        />
        <img
          className="photo-details-modal__image"
          src={imageSource}
          alt="Selected Photo"
        />
        <div className="photo-details-modal__top-bar">
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={profile}
              alt={"User Profile"}
            />
            <div className="photo-details-modal__photographer-info">
              <p>{username}</p>

              <p className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </p>
            </div>
          </div>
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div className="photo-details-modal__images">
          {/* <PhotoList photos={photos}/> */}
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsModal;