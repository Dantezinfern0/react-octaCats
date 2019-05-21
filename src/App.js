import React, { Component } from 'react'
import CatCharacter from './components/CatCharacter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import catCharactersList from './data/octocats.json'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <section className="main-body">
            <ul>
              {catCharactersList.data.map(character => {
                return (
                  <CatCharacter
                    key={character.name}
                    names={character.name}
                    src={character.image}
                    hashNumber={character.number}
                    contributor={character.link}
                  />
                )
              })}
            </ul>
          </section>
          <Footer />
        </div>
      </>
    )
  }
}

export default App
