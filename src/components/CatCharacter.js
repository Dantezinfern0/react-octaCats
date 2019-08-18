import React, { Component } from 'react'

class CatCharacter extends Component {
  constructor(props) {
    super(props)
  }
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
              <a href={this.props.contributor.link}>
              <img src={this.props.contributor.image} />
              </a>
            </div>
          </section>
        </div>
      </li>
    )
  }
}
export default CatCharacter
