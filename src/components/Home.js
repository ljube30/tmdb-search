import React, { Component } from "react";
import Nav from "./Nav";
import tmdb from "../apis/tmdb";
import TitleList from "./Titles/TitleList";

class Home extends Component {
  state = {
    searchTerm: "/tv/popular",
    data: []
  };

  componentDidMount = async () => {
    const response = await tmdb.get(this.state.searchTerm);
    console.log(response);
    //GET TOP 10 TV SHOWS BASED ON POPULARITY
    this.setState({ data: response.data.results.splice(0, 10) });
  };
  onNavChange = async callbackTerm => {
    const response = await tmdb.get(callbackTerm);
    console.log(response);
    //GET TOP 10 TVSHOWS or MOVIES(Depends on navbar click) BASED ON POPULARITY
    this.setState({ data: response.data.results.splice(0, 10) });
  };

  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <Nav onNavChange={this.onNavChange} />
        <TitleList data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Home;
