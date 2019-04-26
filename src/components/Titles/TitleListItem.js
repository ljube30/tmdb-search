import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TitleListItem extends Component {
  listItemImageStyle = {
    height: "35rem",
    width: "auto"
  };
  listItemsStyle = {
    margin: "1rem",
    padding: "0.5rem",
    textAlign: "center"
  };

  handleTitleClick = data => {
    localStorage.setItem("titleId", data.id);
    this.props.history.push(`/details/${data.id}`);
  };
  render() {
    const data = this.props.data;
    return (
      <div
        className="border"
        style={this.listItemsStyle}
        onClick={() => this.handleTitleClick(data)}
      >
        <img
          alt={data.original_title}
          className="img-fluid"
          style={this.listItemImageStyle}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        />
        <h2>{data.name}</h2>
        <h2>{data.original_title}</h2>
      </div>
    );
  }
}

export default withRouter(TitleListItem);
