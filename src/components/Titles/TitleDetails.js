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
        <div />
        <img
          alt={this.state.data.original_title}
          className="img-fluid"
          style={this.listItemImageStyle}
          src={`https://image.tmdb.org/t/p/w400/${this.state.data.poster_path}`}
        />
        <h2>{this.state.data.name}</h2>
        <h2>{this.state.data.original_title}</h2>
        <p>
          Overview:
          <br />
          {this.state.data.overview}
        </p>
      </div>
    );
  }
}

export default TitleDetails;
