import React from "react";
import { useState, useEffect } from "react";

const useApplicationData = () => {
  // Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModalWithPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Favourite Photos State Management
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);

  const addFavouritePhoto = (photo) => {
    setFavouritePhotos((prevPhotos) => {
      const newPhotos = [...prevPhotos, photo.id];
      return newPhotos;
    });
  };

  const removeFavouritePhoto = (photo) => {
    setFavouritePhotos((prevPhotos) => {
      const newPhotos = prevPhotos.filter((id) => id !== photo.id);
      return newPhotos;
    });
  };

  useEffect(() => {
    toggleDisplayAlert();
  }, [favouritePhotos]);

  const toggleDisplayAlert = () => {
    return favouritePhotos.length === 0
      ? setDisplayAlert(false)
      : setDisplayAlert(true);
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      favouritePhotos,
      displayAlert
    },
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
    toggleDisplayAlert,
  };


};

export default useApplicationData;