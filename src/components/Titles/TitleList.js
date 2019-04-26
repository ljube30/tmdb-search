import React from "react";
import TitleListItem from "./TitleListItem";

const TitleList = ({ data }) => {
  const renderedList = data.map(title => {
    return (
      <div className="mx-auto" key={title.id}>
        <TitleListItem className="col-sm" data={title} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default TitleList;
