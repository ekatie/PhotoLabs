import React from "react";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";
import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = ({
  isModalOpen,
  onClose,
  photo,
  similarPhotos,
  onToggleFavourite,
  favouritePhotos,
  addFavouritePhoto,
  removeFavouritePhoto,
  onOpenModal,
}) => {
  if (!isModalOpen || !photo) return null;

  const { imageSource, profile, username, location, isFavourite } = photo;

  const handleToggleFavourite = (event) => {
    event.stopPropagation();
    onToggleFavourite(!isFavourite);
  };

  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close" />
        </button>
        <div className="photo-details-modal__top-bar">
          <div>
            <PhotoFavButton
              isFavourite={isFavourite}
              onToggleFavourite={(event) => handleToggleFavourite(event)}
            />
            <div>
              <img
                className="photo-details-modal__image"
                src={imageSource}
                alt="Selected Photo"
              />
            </div>
            <div>
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
            <div>
              <h2 className="photo-details-modal__header">Similar Photos</h2>
              <div className="photo-details-modal__images">
                <PhotoList
                  photos={similarPhotos}
                  favouritePhotos={favouritePhotos}
                  addFavouritePhoto={addFavouritePhoto}
                  removeFavouritePhoto={removeFavouritePhoto}
                  onOpenModal={onOpenModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsModal;
