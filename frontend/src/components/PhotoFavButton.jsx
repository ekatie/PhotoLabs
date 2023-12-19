import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

const [favourite, setFavourite] = useState(false)

const toggleFavStatus = () => {
  setFavourite(!favourite)
}

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavStatus}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;