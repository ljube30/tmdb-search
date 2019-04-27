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
        <Link to="/">{"<"} Back</Link>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe title="Video Player" src={videoSrc} allowfullscreen />
        </div>
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
