import React, { Component } from "react";

class Nav extends Component {
  state = {
    btn1: "btn btn-primary",
    btn2: "btn btn-light"
  };

  handleClickShows = () => {
    this.props.onNavChange("/tv/popular");
    localStorage.setItem("navActive", "tv");
    this.setState({
      btn1: "btn btn-primary",
      btn2: "btn btn-light"
    });
  };
  handleClickMovies = () => {
    //Make sure we call callback from parent component
    this.props.onNavChange("/movie/popular");
    localStorage.setItem("navActive", "movies");
    this.setState({
      btn1: "btn btn-light",
      btn2: "btn btn-primary"
    });
  };
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <button className={this.state.btn1} onClick={this.handleClickShows}>
              Tv Shows
            </button>
          </li>
          <li className="breadcrumb-item">
            <button
              className={this.state.btn2}
              onClick={this.handleClickMovies}
            >
              Movies
            </button>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Nav;
