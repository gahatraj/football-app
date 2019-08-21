import React, { Component } from "react";
import FootballField from "./field";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-content">
          <h3>Status</h3>
          <div className="fields">
            <FootballField />
          </div>
        </div>
        <div className="profile-random">
          <h3>Subscription</h3>
        </div>
      </div>
    );
  }
}

export default Profile;
