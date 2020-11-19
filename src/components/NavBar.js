import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="header">
        <h1 className="title-name">The Octo-Cat Roledex!</h1>
          <div className="top-links">
            <a href="https://github.com/Dantezinfern0">Back to GitHub</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
