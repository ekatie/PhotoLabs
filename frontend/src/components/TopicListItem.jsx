import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, getPhotosByTopic }) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;