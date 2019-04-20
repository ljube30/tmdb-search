import React, { Component } from "react";
import Nav from "./Nav";
import tmdb from "../apis/tmdb";

class Home extends Component {
  state = {
    searchTerm: "/tv/popular",
    data: []
  };
  componentDidMount = async searchTerm => {
    const response = await tmdb.get(`${this.state.searchTerm}`);
    console.log(response);
    //we care for response.data.items because that is where api fetches videos
    this.setState({ data: response.data.results.splice(10) });
  };
  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <Nav />
        <button onClick={this.onbuttonClick}>Execute</button>
      </React.Fragment>
    );
  }
}

export default Home;
