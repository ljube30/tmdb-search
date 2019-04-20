import React from "react";

const TitleListItem = ({ data }) => {
  const listItemStyles = {
    height: "40rem",
    width: "auto"
  };
  return (
    <div>
      <img
        alt={data.original_title}
        className="img-fluid img-thumbnail"
        style={listItemStyles}
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      />
      <h2>{data.name}</h2>
      <h2>{data.original_title}</h2>
    </div>
  );
};

export default TitleListItem;
