export const FETCH_MOVIES_SEARCHING = 'FETCH_MOVIES_SEARCHING'
export const FETCH_MOVIES_SEARCHED = 'FETCH_MOVIES_SEARCHED'
export const FETCH_MOVIES_SEARCHED_ERROR = 'FETCH_MOVIES_SEARCHED_ERROR'

export const FETCH_MOVIES_CHARACTERS_SEARCHING =
  'FETCH_MOVIES_CHARACTERS_SEARCHING'
export const FETCH_MOVIES_CHARACTERS_SEARCHED =
  'FETCH_MOVIES_CHARACTERS_SEARCHED'
export const FETCH_MOVIES_CHARACTERS_SEARCHED_ERROR =
  'FETCH_MOVIES_CHARACTERS_SEARCHED_ERROR'

export const fetchMovies = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type : FETCH_MOVIES_SEARCHING
    })
    request(api + 'films/', 'GET')
      .then((response) => {
        dispatch({
          type    : FETCH_MOVIES_SEARCHED,
          payload : response
        })
      })
      .catch((error) => {
        dispatch({
          type    : FETCH_MOVIES_SEARCHED_ERROR,
          payload : error
        })
      })
  }
}

export const fetchCharactersDetails = (caractersUrl) => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type    : FETCH_MOVIES_CHARACTERS_SEARCHING,
      payload : { total: caractersUrl.length }
    })
    caractersUrl.forEach((url) => {
      request(url, 'GET')
        .then((response) => {
          dispatch({
            type    : FETCH_MOVIES_CHARACTERS_SEARCHED,
            payload : response
          })
        })
        .catch((error) => {
          dispatch({
            type    : FETCH_MOVIES_CHARACTERS_SEARCHED_ERROR,
            payload : error
          })
        })
    })
  }
}
