import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="header">
          <img src="./images/logo (1).png" />
          <div class="top-links">
            <a href="#">RSS</a>
            <a href="#">FAQ</a>
            <a href="#">Back to GitHub</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;