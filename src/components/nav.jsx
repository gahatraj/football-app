import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
