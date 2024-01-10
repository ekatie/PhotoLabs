import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/**
 * This component renders the favourite badge. It is used to indicate whether a photo is a favourite or not.
 * @param {Object} props
 * @param {boolean} props.isFavPhotoExist - whether the photo is a favourite or not
 * @returns {JSX.Element}
 */

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;