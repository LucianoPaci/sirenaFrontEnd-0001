import React, { Component } from 'react'
import PokemonDetail from './PokemonDetail'
import PokemonInput from './PokemonInput'
import PokemonList from './PokemonList'
import { request } from './utils'

const styles = {
  root : {
    display : 'flex'
  }
}

export default class PokemonPage extends Component {
  constructor () {
    super()

    this.state = {
      inputValue    : '',
      pokemonDetail : null,
      pokemonList   : []
    }
  }

  componentWillMount () {
    this.requestToPokeAPi('https://pokeapi.co/api/v2/pokemon/')
  }

  requestToPokeAPi = (url) => {
    request(url, 'GET')
      .then((response) => {
        this.addNewPokemons(response.results)
        // if (response.next) {
        //   this.requestToPokeAPi(response.next)
        // }
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  addNewPokemons = (results) => {
    const { pokemonList } = this.state

    this.setState({
      pokemonList : pokemonList.concat(results)
    })
  }

  handlerInputChange = (event) => {
    this.setState({
      inputValue : event.target.value
    })
  }

  handleClickPokemon = (url) => {
    request(url, 'GET')
      .then((response) => {
        console.log('Detalle ', response)
        this.setState({
          pokemonDetail : response
        })
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  render () {
    const { inputValue, pokemonList, pokemonDetail } = this.state
    console.log(pokemonList)
    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          <PokemonInput onInputChange={this.handlerInputChange} />
          <PokemonList
            pokemonList={filteredPokemonList}
            onClickPokemon={this.handleClickPokemon}
          />
        </div>
        <div>
          {
            pokemonDetail ? <PokemonDetail
              id={pokemonDetail.id}
              name={pokemonDetail.name}
              height={pokemonDetail.height}
            /> :
            null}
        </div>
      </div>
    )
  }
}
