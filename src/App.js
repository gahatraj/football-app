import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import Nav from "./components/nav";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
