import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });

    if (this.state.searchTerm.length >= 2) {
      console.log("Triggered");
    }
  };

  render() {
    return (
      <div className="col-md-12">
        <form className="navbar-form" onSubmit={this.handleFormSubmit}>
          <div className="input-group add-on">
            <input
              className="form-control"
              placeholder="&#x1F50D; Search"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
