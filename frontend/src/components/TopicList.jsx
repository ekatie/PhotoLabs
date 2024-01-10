import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

/**
 * This component renders a list of topics.
 * @param {Object} props
 * @param {Object[]} props.topics - an array of topics
 * @param {function} props.getPhotosByTopic - function to get photos by topic
 * @returns {JSX.Element}
 */

const TopicList = ({ topics, getPhotosByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({ id, title }) => (
        <TopicListItem
          key={id}
          id={id}
          title={title}
          getPhotosByTopic={getPhotosByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;