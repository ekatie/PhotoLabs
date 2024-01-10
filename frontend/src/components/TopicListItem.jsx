import React from "react";
import "../styles/TopicListItem.scss";

/**
 * This component renders a topic in the list of topics.
 * @param {Object} props
 * @param {string} props.id - the id of the topic
 * @param {string} props.title - the title of the topic
 * @param {function} props.getPhotosByTopic - function to get photos by topic
 * @returns {JSX.Element}
 */

const TopicListItem = ({ id, title, getPhotosByTopic }) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;