import React from 'react'
import PokemonListItem from './PokemonListItem'
import './pokemonList.css'

export default function PokemonList ({ pokemonList = [], onClickPokemon }){
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <PokemonListItem
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          onClickPokemon={onClickPokemon}
        />
      ))}
    </ul>
  )
}
