import React from 'react'

const styles = {
  root : {
    textTransform : 'capitalize',
    fontSize      : 20,
    cursor        : 'pointer'
  }
}

export default function PokemonListItem ({ name, url, onClickPokemon }){
  return (
    <li style={styles.root} onClick={() => onClickPokemon(url)}>
      {name}
    </li>
  )
}
