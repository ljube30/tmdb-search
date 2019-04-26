import React from "react";
import { Link } from "react-router-dom";

const TitleDetails = () => {
  return (
    <div className="container">
      <Link to="/">{"<"} Back</Link>
      <div>Trailer Here</div>
      <div>Title Here</div>
      <div>Overview Here</div>
    </div>
  );
};

export default TitleDetails;
