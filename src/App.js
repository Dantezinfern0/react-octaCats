import React, { Component } from 'react'
import CatCharacter from './components/CatCharacter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: []
    }
  }
  componentDidMount() {
    console.log('component mounted')
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json.data)
        this.setState({
          dataList: json.data
        })
      })
  }
  render() {
    console.log('rendered')
    return (
      <>
        <NavBar />
        <div>
          <section>
            <ul className="main-body">
              {this.state.dataList.map(character => {
                return (
                  <CatCharacter
                    key={character.name}
                    names={character.name}
                    src={character.image}
                    number={character.number}
                    contributor={character.authors[0]}
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
