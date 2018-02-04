
import React from 'react'
import MovieCharacter from './MovieCharacter'
const styles = {
  root: {
    border: 'solid red',
    margin: 10,
    padding: 10,
    width: '50%',
    height: '50%',


  },

  h1: {
    color: 'red'
  }
}

export default function MovieDetail({ title, year, characters = [] }) {

  return (
    <div style={styles.root}>
      <h1 style={styles.h1}>{title}</h1>
      {characters.map(each => (
        <MovieCharacter url={each} />
      )
      )}
      <h3>{characters.join(' - ')}</h3>
      <span> {`(${year})`} </span>
    </div>
  )

}

//