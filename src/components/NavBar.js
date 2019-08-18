import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <img src="./images/logo.png" />
          <div className="top-links">
            <a href="#">RSS</a>
            <a href="#">FAQ</a>
            <a href="https://github.com/Dantezinfern0">Back to GitHub</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
