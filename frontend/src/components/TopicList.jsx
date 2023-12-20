import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({id, title}) => 
        <TopicListItem 
        key={id} 
        title={title}/>
      )
      }
    </div>
  );
};

export default TopicList;
