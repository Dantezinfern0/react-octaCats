import React, { Component } from 'react'




class CatCharacter extends Component {
  render() {
    return (
      <li>
        <div class="outer-image">
          <img class="image-area" src={this.props.src} />
          <section class="caption">
            <p>{this.props.hashNumber}</p>
            <div class="name-pic">
              <p>
                the <em>{this.props.name}</em> by
              </p>
              <img src="https://github.com/cameronmcefee.png" />
            </div>
          </section>
        </div>
      </li>
    )
  }
}
export default CatCharacter;
