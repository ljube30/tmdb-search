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
  };

  render() {
    return (
      <div class="col-md-12">
        <form class="navbar-form" onSubmit={this.handleFormSubmit}>
          <div class="input-group add-on">
            <input
              class="form-control"
              placeholder="Search"
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
