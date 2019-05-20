import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// const catCharactersInfo = () => {
//   fetch('https://sdg-octodex.herokuapp.com/')
//     .then(resp => {
//       return resp.json('./components/octocats.json')
//     })
//     .then(kitty => {
//       console.log(kitty)
//     })
// }
// document.addEventListener('DOMLoaded', catCharactersInfo)
ReactDOM.render(<App />, document.getElementById('root'))
