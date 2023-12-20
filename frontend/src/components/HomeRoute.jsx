import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import { useState } from "react";

import '../styles/HomeRoute.scss'

const HomeRoute = ({topics, photos}) => {

const [favouritePhotos, setFavouritePhotos] = useState([])

const addFavouritePhoto = (photo) => {
  (console.log('Adding photo to favourites'))
  setFavouritePhotos((prevPhotos) => [...prevPhotos, photo.id])
}

const removeFavouritePhoto = (photo) => {
  console.log('Removing photo from favourites')
  setFavouritePhotos((prevPhotos) => prevPhotos.filter(id => id !== photo.id))
}

return (
  <div className="home-route">
  <TopNavigation topics={topics}/>
  <PhotoList 
  photos={photos}
  favouritePhotos={favouritePhotos}
  onAddFavourite={(photo) => addFavouritePhoto(photo)}
  onRemoveFavourite={(photo) => removeFavouritePhoto(photo)}/>
  </div>
)
};

export default HomeRoute;