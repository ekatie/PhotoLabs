import React from "react";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";

/**
 * This is the top-level component for the application. It renders the HomeRoute component and the PhotoDetailsModal component.
 * @returns {JSX.Element}
 */

const App = () => {
  const {
    state,
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
    getPhotosByTopic,
    toggleFavourites,
    setSearchTerm,
    findSimilarPhotos,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        onOpenModal={openModalWithPhoto}
        favouritePhotos={state.favouritePhotos}
        displayAlert={state.displayAlert}
        addFavouritePhoto={addFavouritePhoto}
        removeFavouritePhoto={removeFavouritePhoto}
        getPhotosByTopic={getPhotosByTopic}
        toggleFavourites={toggleFavourites}
        showFavourites={state.showFavourites}
        setSearchTerm={setSearchTerm}
        searchTerm={state.searchTerm}
        filteredPhotos={state.filteredPhotos}
      />
      <PhotoDetailsModal
        onOpenModal={openModalWithPhoto}
        photos={state.photoData}
        similarPhotos={findSimilarPhotos(state.selectedPhoto)}
        favouritePhotos={state.favouritePhotos}
        isModalOpen={state.isModalOpen}
        onClose={closeModal}
        photo={
          state.selectedPhoto && {
            key: state.selectedPhoto.id,
            imageSource: state.selectedPhoto.urls.regular,
            profile: state.selectedPhoto.user.profile,
            username: state.selectedPhoto.user.username,
            location: state.selectedPhoto.location,
            isFavourite: state.favouritePhotos.some(
              (photo) => photo.id === state.selectedPhoto.id
            ),
            similar_photos: state.selectedPhoto.similar_photos,
          }
        }
        addFavouritePhoto={addFavouritePhoto}
        removeFavouritePhoto={removeFavouritePhoto}
        onToggleFavourite={(isFavourite) =>
          isFavourite
            ? addFavouritePhoto(state.selectedPhoto)
            : removeFavouritePhoto(state.selectedPhoto)
        }
      />
    </div>
  );
};

export default App;
