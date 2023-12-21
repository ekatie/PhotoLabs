import { React, useState } from 'react';
import HomeRoute from 'components/HomeRoute';
import photos from './mocks/photos.js';
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
      isModalOpen={isModalOpen}
      onClose={closeModal}
      content={selectedPhoto && (
        <div>
          <h2>{selectedPhoto.user.username}</h2>
          <img src={selectedPhoto.urls.regular} alt="Selected Photo" />
        </div>
      )}
      />
  </div>
)
}

export default App;