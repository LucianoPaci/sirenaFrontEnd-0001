import React, { Component } from 'react'
import PokemonDetail from './PokemonDetail'
import PokemonInput from './PokemonInput'
import PokemonList from './PokemonList'
import { request } from './utils'
import { connect } from 'react-redux'

import { fetchPokemons, fetchPokemonDetail } from './actions'

const styles = {
  root : {
    display : 'flex'
  }
}

class PokemonPage extends Component {
  constructor () {
    super()

    this.state = {
      inputValue    : '',
      pokemonDetail : null
    }
  }

  componentWillMount () {
    const { fetchPokemons } = this.props
    fetchPokemons()
  }

  handlerInputChange = (event) => {
    this.setState({
      inputValue : event.target.value
    })
  }

  handleClickPokemon = (url) => {
    const { fetchPokemonDetail } = this.props
    fetchPokemonDetail(url)
  }

  render () {
    const { pokemonList, pokemonDetail, isSearching, error } = this.props

    const { inputValue } = this.state
    // const inputValue = this.state.inputValue
    // const pokemonList = this.state.pokemonList
    // const pokemonDetail = this.state.pokemonDetail

    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        {
          isSearching ? 'Buscando...' :
          null}
        {error || null}
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

function mapStateToProps (state){
  const {
    pokemonPage : { count, pokemonList, pokemonDetail, isSearching, error }
  } = state

  return {
    count,
    isSearching,
    pokemonList,
    pokemonDetail,
    error
  }
}

const mapDispatchToProps = {
  fetchPokemons,
  fetchPokemonDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
