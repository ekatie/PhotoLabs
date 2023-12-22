import { React, useState, useEffect } from "react";
import HomeRoute from "components/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
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

  useEffect(() => {
    toggleDisplayAlert();
  }, [favouritePhotos]);

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

  const toggleDisplayAlert = () => {
    return favouritePhotos.length === 0
      ? setDisplayAlert(false)
      : setDisplayAlert(true);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onOpenModal={openModalWithPhoto}
        favouritePhotos={favouritePhotos}
        displayAlert={displayAlert}
        addFavouritePhoto={addFavouritePhoto}
        removeFavouritePhoto={removeFavouritePhoto}
        toggleDisplayAlert={toggleDisplayAlert}
      />
      <PhotoDetailsModal
        photos={photos}
        favouritePhotos={favouritePhotos}
        isModalOpen={isModalOpen}
        onClose={closeModal}
        photo={
          selectedPhoto && {
            key: selectedPhoto.id,
            imageSource: selectedPhoto.urls.regular,
            profile: selectedPhoto.user.profile,
            username: selectedPhoto.user.username,
            location: selectedPhoto.location,
            isFavourite: favouritePhotos.includes(selectedPhoto.id),
            similar_photos: selectedPhoto.similar_photos,
          }
        }
        addFavouritePhoto={addFavouritePhoto}
        removeFavouritePhoto={removeFavouritePhoto}
        onToggleFavourite={(isFavourite) =>
          isFavourite
            ? addFavouritePhoto(selectedPhoto)
            : removeFavouritePhoto(selectedPhoto)
        }
      />
    </div>
  );
};

export default App;