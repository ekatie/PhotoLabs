import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map(({ id, urls, user, location }) => (
        <PhotoListItem
          key={id}
          imageSource={urls.regular}
          profile={user.profile}
          username={user.username}
          location={location}
        />
      ))}
    </ul>
  );
};

export default PhotoList;