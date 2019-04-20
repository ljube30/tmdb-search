import React from "react";

const TitleListItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img
        alt={data.original_title}
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      />
      <h2>{data.name}</h2>
      <h2>{data.original_title}</h2>
    </div>
  );
};

export default TitleListItem;
