import React, { Component } from "react";
import { Link } from "react-router-dom";
import tmdb from "../../apis/tmdb";

class TitleDetails extends Component {
  state = { data: [], videos: "" };
  titleId = localStorage.getItem("titleId");

  componentDidMount = async () => {
    let response = {};
    if (localStorage.getItem("navActive") === "movies") {
      response = await tmdb.get(`/movie/${this.titleId}`);
    } else if (localStorage.getItem("navActive") == "tv") {
      response = await tmdb.get(`/tv/${this.titleId}`);
    }
    let videos = {};
    if (localStorage.getItem("navActive") === "movies") {
      videos = await tmdb.get(`/movie/${this.titleId}/videos`);
    } else {
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
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
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
            allowFullScreen
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
