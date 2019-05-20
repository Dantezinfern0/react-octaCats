import React, { Component } from 'react'
import CatCharacter from './components/CatCharacter'

const catCharactersList = [
  {
    name: 'Octobi Wan Catnobi',
    src: 'https://octodex.github.com/images/octobiwan.jpg',
    hash: '#3'
  },
  {
    name: 'Stormtroopocat',
    src: 'https://octodex.github.com/images/stormtroopocat.png',
    hash: '#86'
  },
  {
    name: 'Doctocat Brown',
    src: 'https://octodex.github.com/images/doctocat-brown.jpg',
    hash: '#68'
  },
  {
    name: 'Octocat De Los Muertos',
    src: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    hash: '#56'
  },
  {
    name: 'Dunetocat',
    src: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105'
  },
  {
    name: 'Daftpunktocat-Thomas',
    src: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    hash: '#102'
  },
  {
    name: 'Heisencat',
    src: 'https://octodex.github.com/images/heisencat.png',
    hash: '#78'
  },
  {
    name: 'Boxertocat',
    src: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    hash: '#143'
  },
  {
    name: 'Justicetocat',
    src: 'https://octodex.github.com/images/justicetocat.jpg',
    hash: '#136'
  },
  {
    name: 'Gobble-o-tron',
    src: 'https://octodex.github.com/images/gobbleotron.gif',
    hash: '#120'
  },
  {
    name: 'X-tocat',
    src: 'https://octodex.github.com/images/xtocat.jpg',
    hash: '#36'
  },
  {
    name: 'Saritocat',
    src: 'https://octodex.github.com/images/saritocat.png',
    hash: '#114'
  },
  {
    name: 'Yaktocat',
    src: 'https://octodex.github.com/images/yaktocat.png',
    hash: '#109'
  },
  {
    name: 'Dunetocat',
    src: 'https://octodex.github.com/images/dunetocat.png',
    hash: '#105'
  },
  {
    name: 'Ironcat',
    src: 'https://octodex.github.com/images/ironcat.jpg',
    hash: '#25'
  },
  {
    name: 'Murikamicat',
    src: 'https://octodex.github.com/images/murakamicat.png',
    hash: '#83'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <nav class="header">
          <img src="./images/logo (1).png" />
          <div class="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>
        <div class="container">
          <section class="main-body">
            <ul>
              {catCharactersList.map(character => {
                return <CatCharacter name={catCharactersList.name} />
              })}
            </ul>
          </section>
          <footer>
            <div class="bottom-links">
              <p>RSS</p>
              <p>FAQ</p>
            </div>
            <i class="fab fa-github" />
            <div class="copyright">
              <p>© 2013 – 2018 GitHub, Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default App
