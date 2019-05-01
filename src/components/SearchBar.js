import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("SearchStore")
@observer
class SearchBar extends Component {
  state = {
    searchTerm: ""
  };
  timeout = 0;
  /*
  handleFormSubmit = event => {
    event.preventDefault();
  };
*/
  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });

    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      //search function
      if (this.state.searchTerm.length >= 2) {
        this.props.SearchStore.pushSearchTerm(this.state.searchTerm);
      }
    }, 1000);
  };

  render() {
    return (
      <div className="col-md-12">
        <div className="navbar-form" /*onSubmit={this.handleFormSubmit}*/>
          <div className="input-group add-on">
            <input
              className="form-control"
              placeholder="&#x1F50D; Search"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
