import React, { Component } from 'react'
import { request } from './utils';


const styles = {
  root: {
    fontSize: 20,
    color: 'blue'
  }
}

export default class MovieCharacter extends Component {

  constructor() {
    super()

    this.state = {
      character: {}
    }
  }

  requestToSWApi = (url) => {

    request(url, 'GET')
      .then((response) => {
        this.setState({
          character: response
        })
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  //Como hago para invocar el llamado a la request con la prop que esta recibiendo desde MovieDetail ?
  // La prop no sabria como traerla al nuevo Component
  render() {

    console.log(character, 'Character: ')
    const { character } = this.state
    return (
      <p style={styles.root}>{console.log(character)}</p>
      // {character}  
    )
  }






}
