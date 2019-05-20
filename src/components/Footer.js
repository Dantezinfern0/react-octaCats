import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="bottom-links">
            <p>RSS</p>
            <p>FAQ</p>
          </div>
          <i className="fab fa-github" />
          <div className="copyright">
            <p>© 2013 – 2018 GitHub, Inc.</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
