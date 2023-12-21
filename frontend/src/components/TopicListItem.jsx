import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({id, title}) => {
  return (
    <div className="topic-list__item">
    <span>{title}</span>
    </div>
  );
};

export default TopicListItem;