
import React from 'react'

export default function Movie({ title, year, actors = [], url, onClickMovie }) {

  const styles = {
    root: {
      margin: 10,
      cursor: 'pointer'
    }
  }

  return (
    <div className="movieContainer" style={styles.root}>
      <li onClick={() => onClickMovie(url)}>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <p>{actors.join(' - ')}</p>
      </li>
    </div>
  )
}