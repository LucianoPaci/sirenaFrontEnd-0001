import * as ActionTypes from './actions'

const initialState = {
  count         : 0,
  isSearching   : false,
  pokemonList   : [],
  pokemonDetail : null
}

export default function reducer (state = initialState, action){
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count : state.count + 1
      }

    case ActionTypes.FETCH_POKEMONS_SEARCHING:
      return {
        ...state,
        isSearching : true
      }

    case ActionTypes.FETCH_POKEMONS_SEARCHED:
      return {
        ...state,
        isSearching : false,
        pokemonList : state.pokemonList.concat(action.payload.results)
      }

    case ActionTypes.FETCH_POKEMONS_SEARCH_ERROR:
      return {
        ...state,
        isSearching : false,
        error       : action.payload.toString()
      }
    case ActionTypes.FETCH_POKEMON_DETAIL_SEARCHING:
      return {
        ...state,
        isSearching : true
      }

    case ActionTypes.FETCH_POKEMON_DETAIL_SEARCHED:
      return {
        ...state,
        isSearching   : false,
        pokemonDetail : action.payload
      }

    default:
      return state
  }
}
