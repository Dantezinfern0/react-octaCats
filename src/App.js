import React, { Component } from 'react'
import CatCharacter from './components/CatCharacter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const catCharactersList = [
  {
    name: 'Octobi Wan Catnobi',
    srcUrl: 'https://octodex.github.com/images/octobiwan.jpg',
    hash: '#3'
  },
  {
    name: 'Stormtroopocat',
    srcUrl: 'https://octodex.github.com/images/stormtroopocat.png',
    hash: '#86'
  },
  {
    name: 'Doctocat Brown',
    srcUrl: 'https://octodex.github.com/images/doctocat-brown.jpg',
    hash: '#68'
  },
  {
    name: 'Octocat De Los Muertos',
    srcUrl: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    hash: '#56'
  },
  {
    name: 'Dunetocat',
    srcUrl: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105'
  },
  {
    name: 'Daftpunktocat-Thomas',
    srcUrl: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    hash: '#102'
  },
  {
    name: 'Heisencat',
    srcUrl: 'https://octodex.github.com/images/heisencat.png',
    hash: '#78'
  },
  {
    name: 'Boxertocat',
    srcUrl: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    hash: '#143'
  },
  {
    name: 'Justicetocat',
    srcUrl: 'https://octodex.github.com/images/justicetocat.jpg',
    hash: '#136'
  },
  {
    name: 'Gobble-o-tron',
    srcUrl: 'https://octodex.github.com/images/gobbleotron.gif',
    hash: '#120'
  },
  {
    name: 'X-tocat',
    srcUrl: 'https://octodex.github.com/images/xtocat.jpg',
    hash: '#36'
  },
  {
    name: 'Saritocat',
    srcUrl: 'https://octodex.github.com/images/saritocat.png',
    hash: '#114'
  },
  {
    name: 'Yaktocat',
    srcUrl: 'https://octodex.github.com/images/yaktocat.png',
    hash: '#109'
  },
  {
    name: 'Dunetocat',
    srcUrl: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105'
  },
  {
    name: 'Ironcat',
    srcUrl: 'https://octodex.github.com/images/ironcat.jpg',
    hash: '#25'
  },
  {
    name: 'Murikamicat',
    srcUrl: 'https://octodex.github.com/images/murakamicat.png',
    hash: '#83'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div class="container">
          <section class="main-body">
            <ul>
              {catCharactersList.map(character => {
                return <CatCharacter 
                name={catCharactersList.name}
                src={catCharactersList.srcUrl}
                hashNumber={catCharactersList.hash} />
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
