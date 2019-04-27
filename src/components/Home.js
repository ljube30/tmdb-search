import React, { Component } from "react";
import Nav from "./Nav";
import tmdb from "../apis/tmdb";
import TitleList from "./Titles/TitleList";
import SearchBar from "./SearchBar";

class Home extends Component {
  state = {
    searchTerm: "/tv/popular",
    data: []
  };

  componentDidMount = async () => {
    localStorage.setItem("navActive", "tv");
    const response = await tmdb.get(this.state.searchTerm);
    //GET TOP 10 TV SHOWS BASED ON POPULARITY
    this.setState({ data: response.data.results.splice(0, 10) });
  };
  onNavChange = async callbackTerm => {
    const response = await tmdb.get(callbackTerm);
    //GET TOP 10 TVSHOWS or MOVIES(Depends on navbar click) BASED ON POPULARITY
    this.setState({ data: response.data.results.splice(0, 10) });
  };

  render() {
    return (
      <div className="container">
        <Nav onNavChange={this.onNavChange} />
        <SearchBar />
        <TitleList data={this.state.data} />
      </div>
    );
  }
}

export default Home;
