import React from "react";
import HomeRoute from "components/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    openModalWithPhoto,
    closeModal,
    addFavouritePhoto,
    removeFavouritePhoto,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onOpenModal={openModalWithPhoto}
        favouritePhotos={state.favouritePhotos}
        displayAlert={state.displayAlert}
        addFavouritePhoto={addFavouritePhoto}
        removeFavouritePhoto={removeFavouritePhoto}
      />
      <PhotoDetailsModal
        photos={photos}
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
            isFavourite: state.favouritePhotos.includes(state.selectedPhoto.id),
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
