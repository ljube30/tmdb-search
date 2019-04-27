import React, { Component } from "react";
import { Link } from "react-router-dom";
import tmdb from "../../apis/tmdb";

class TitleDetails extends Component {
  state = { data: [] };
  titleId = localStorage.getItem("titleId");

  componentDidMount = async () => {
    let response = {};
    try {
      response = await tmdb.get(`/movie/${this.titleId}`);
    } catch {
      response = await tmdb.get(`/tv/${this.titleId}`);
    }
    this.setState({ data: response.data });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <Link to="/">{"<"} Back</Link>
        <div>Trailer Here</div>
        <div>Title Here</div>
        <div>Overview Here</div>
      </div>
    );
  }
}

export default TitleDetails;
