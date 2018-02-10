export const INCREMENT = 'INCREMENT'

export const FETCH_POKEMONS_SEARCHING = 'FETCH_POKEMONS_SEARCHING'
export const FETCH_POKEMONS_SEARCHED = 'FETCH_POKEMONS_SEARCHED'
export const FETCH_POKEMONS_SEARCH_ERROR = 'FETCH_POKEMONS_SEARCH_ERROR'

export const FETCH_POKEMON_DETAIL_SEARCHING = 'FETCH_POKEMON_DETAIL_SEARCHING'
export const FETCH_POKEMON_DETAIL_SEARCHED = 'FETCH_POKEMON_DETAIL_SEARCHED'

export const dispatchIncrement = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type : INCREMENT
    })
  }
}

export const fetchPokemons = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type : FETCH_POKEMONS_SEARCHING
    })
    request(api + '/pokemon/', 'GET')
      .then((response) => {
        dispatch({
          type    : FETCH_POKEMONS_SEARCHED,
          payload : response
        })
      })
      .catch((error) => {
        dispatch({
          type    : FETCH_POKEMONS_SEARCH_ERROR,
          payload : error
        })
      })
  }
}

export const fetchPokemonDetail = (url) => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type : FETCH_POKEMON_DETAIL_SEARCHING
    })
    request('ppe', 'GET').then((response) => {
      dispatch({
        type    : FETCH_POKEMON_DETAIL_SEARCHED,
        payload : response
      })
    })
  }
}
