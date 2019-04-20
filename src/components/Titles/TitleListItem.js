import React from "react";

const TitleListItem = ({ data }) => {
  const listItemImageStyle = {
    height: "35rem",
    width: "auto"
  };
  const listItemsStyle = {
    margin: "1rem",
    padding: "0.5rem",
    textAlign: "center"
  };
  return (
    <div className="border" style={listItemsStyle}>
      <img
        alt={data.original_title}
        className="img-fluid"
        style={listItemImageStyle}
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      />
      <h2>{data.name}</h2>
      <h2>{data.original_title}</h2>
    </div>
  );
};

export default TitleListItem;
