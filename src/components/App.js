import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import TitleDetails from "./Titles/TitleDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/details/:detail" component={TitleDetails} />
      </Router>
    );
  }
}

export default App;
