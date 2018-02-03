import React from 'react'

const styles = {
  root : {
    margin : 30
  }
}

export default function PokemonInput ({ onInputChange }){
  return <input style={styles.root} onChange={onInputChange} />
}
