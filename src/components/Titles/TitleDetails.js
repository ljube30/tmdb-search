import React, { Component } from "react";
import { Link } from "react-router-dom";
import tmdb from "../../apis/tmdb";

class TitleDetails extends Component {
  state = { data: [], videos: "" };
  titleId = localStorage.getItem("titleId");

  componentDidMount = async () => {
    let response = {};
    try {
      response = await tmdb.get(`/movie/${this.titleId}`);
    } catch {
      response = await tmdb.get(`/tv/${this.titleId}`);
    }
    let videos = {};
    try {
      videos = await tmdb.get(`/movie/${this.titleId}/videos`);
    } catch {
      videos = await tmdb.get(`/tv/${this.titleId}/videos`);
    }
    if (typeof videos.data.results[0] != "undefined") {
      this.setState({
        data: response.data,
        videos: videos.data.results[0].key
      });
    } else {
      this.setState({
        data: response.data
      });
    }
  };

  render() {
    const videoSrc = `https://www.youtube.com/embed/${this.state.videos}`;
    return (
      <div className="container">
        <Link to="/" style={{ fontSize: "1.3rem" }}>
          <div style={{ margin: "1rem 0" }}>{"<"} Back</div>
        </Link>
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{ margin: "2rem 0rem" }}
        >
          <iframe
            className="embed-responsive-item"
            title="Video Player"
            src={videoSrc}
            allowfullscreen
          />
        </div>
        <h1>{this.state.data.name}</h1>
        <h1>{this.state.data.original_title}</h1>
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
