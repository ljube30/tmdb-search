import React from "react";
import TitleListItem from "./TitleListItem";

const TitleList = ({ data }) => {
  const renderedList = data.map(title => {
    return <TitleListItem key={title.id} data={title} />;
  });
  return <div>{renderedList}</div>;
};

export default TitleList;
