import React, { Component } from "react";
import Nav from "./Nav";
import tmdb from "../apis/tmdb";

class Home extends Component {
  state = {};
  onbuttonClick = async searchTerm => {
    const response = await tmdb.get("/movie/550", {
      params: {
        // q: searchTerm //search query (what we input in searchbar)
      }
    });
    console.log(response);
    //we care for response.data.items because that is where api fetches videos
    this.setState({});
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <button onClick={this.onbuttonClick}>Execute</button>
      </React.Fragment>
    );
  }
}

export default Home;
