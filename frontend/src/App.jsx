import { React, useState } from 'react';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedPhoto, setSelectedPhoto] = useState(null);

const openModalWithPhoto = (photo) => {
  setSelectedPhoto(photo);
  setIsModalOpen(true);
}

const closeModal = () => {
  setIsModalOpen(false);
}

return (
  <div className="App">
  <HomeRoute photos={photos} topics={topics} onOpenModal={openModalWithPhoto}/>
  <PhotoDetailsModal 
      photos={photos}
      isModalOpen={isModalOpen}
      onClose={closeModal}
      photo={selectedPhoto && (
        {
          key: selectedPhoto.id,
          imageSource: selectedPhoto.urls.regular,
          profile: selectedPhoto.user.profile,
          username: selectedPhoto.user.username,
          location: selectedPhoto.location,
          isFavourite: false
      })}
      />
  </div>
)
}

export default App;