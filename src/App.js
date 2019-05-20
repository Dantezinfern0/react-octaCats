import React, { Component } from 'react'
import CatCharacter from './components/CatCharacter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import catCharactersList from './components/octocat.json'
const catCharactersList = [
  {
    name: 'Octobi Wan Catnobi',
    srcUrl: 'https://octodex.github.com/images/octobiwan.jpg',
    hash: '#3',
    contrib: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Stormtroopocat',
    srcUrl: 'https://octodex.github.com/images/stormtroopocat.png',
    hash: '#86',
    contrib: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Doctocat Brown',
    srcUrl: 'https://octodex.github.com/images/doctocat-brown.jpg',
    hash: '#68',
    contrib: 'https://github.com/jonrohan.png'
  },
  {
    name: 'Octocat De Los Muertos',
    srcUrl: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    hash: '#56',
    contrib: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Dunetocat',
    srcUrl: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105',
    contrib: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'Daftpunktocat-Thomas',
    srcUrl: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    hash: '#102',
    contrib: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Heisencat',
    srcUrl: 'https://octodex.github.com/images/heisencat.png',
    hash: '#78',
    contrib: 'https://github.com/jonrohan.png'
  },
  {
    name: 'Boxertocat',
    srcUrl: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    hash: '#143',
    contrib: 'https://github.com/rubyjazzy.png'
  },
  {
    name: 'Justicetocat',
    srcUrl: 'https://octodex.github.com/images/justicetocat.jpg',
    hash: '#136',
    contrib: 'https://github.com/heyhayhay.png'
  },
  {
    name: 'Gobble-o-tron',
    srcUrl: 'https://octodex.github.com/images/gobbleotron.gif',
    hash: '#120',
    contrib: 'https://github.com/tonyjaramillo.png'
  },
  {
    name: 'X-tocat',
    srcUrl: 'https://octodex.github.com/images/xtocat.jpg',
    hash: '#36',
    contrib: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Saritocat',
    srcUrl: 'https://octodex.github.com/images/saritocat.png',
    hash: '#114',
    contrib: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'Yaktocat',
    srcUrl: 'https://octodex.github.com/images/yaktocat.png',
    hash: '#109',
    contrib: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Dunetocat',
    srcUrl: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105',
    contrib: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'Ironcat',
    srcUrl: 'https://octodex.github.com/images/ironcat.jpg',
    hash: '#25',
    contrib: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Murikamicat',
    srcUrl: 'https://octodex.github.com/images/murakamicat.png',
    hash: '#83',
    contrib: 'https://github.com/billyroh.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <section className="main-body">
            <ul>
              {catCharactersList.map(character => {
                return (
                  <CatCharacter
                    key={character.name}
                    names={character.name}
                    src={character.srcUrl}
                    hashNumber={character.hash}
                    contributor={character.contrib}
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
