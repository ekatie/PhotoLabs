import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import { useState, useEffect } from "react";

import '../styles/HomeRoute.scss'

const HomeRoute = ({topics, photos, onOpenModal}) => {

const [favouritePhotos, setFavouritePhotos] = useState([])
const [displayAlert, setDisplayAlert] = useState(false)

useEffect(() => {
  toggleDisplayAlert();
}, [favouritePhotos]);

const addFavouritePhoto = (photo) => {
  setFavouritePhotos((prevPhotos) => {
    const newPhotos = [...prevPhotos, photo.id];
    return newPhotos;
  });
}

const removeFavouritePhoto = (photo) => {
  setFavouritePhotos((prevPhotos) => {
    const newPhotos = prevPhotos.filter(id => id !== photo.id);
    return newPhotos;
  });
}

const toggleDisplayAlert = () => {
 return favouritePhotos.length === 0 ? setDisplayAlert(false) : setDisplayAlert(true)
}

return (
  <div className="home-route">
  <TopNavigation topics={topics} displayAlert={displayAlert}/>
  <PhotoList 
  photos={photos}
  favouritePhotos={favouritePhotos}
  onAddFavourite={(photo) => addFavouritePhoto(photo)}
  onRemoveFavourite={(photo) => removeFavouritePhoto(photo)}
  onToggleIcon={toggleDisplayAlert} 
  onOpenModal={onOpenModal}
  />
  </div>
)
};

export default HomeRoute;