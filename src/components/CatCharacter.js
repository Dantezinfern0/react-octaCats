import React, { Component } from 'react'

class CatCharacter extends Component {
  render() {
    return (
      <li>
        <div className="outer-image">
          <img className="image-area" src={this.props.src} />
          <section className="caption">
            <p>{this.props.number}</p>
            <div className="name-pic">
              <p>
                the <em>{this.props.names}</em> by
              </p>
              <img src={this.props.contributor} />
            </div>
          </section>
        </div>
      </li>
    )
  }
}
export default CatCharacter
