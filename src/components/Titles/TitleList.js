import React from "react";
import TitleListItem from "./TitleListItem";

const TitleList = ({ data }) => {
  const renderedList = data.map(title => {
    return <TitleListItem className="col-sm" key={title.id} data={title} />;
  });
  return (
    <div className="container">
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default TitleList;
