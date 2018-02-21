// Me traigo todas las Actions que defini. Es la forma de vincular reducer.js con actions.js
import * as ActionTypes from './actions'

const initialState = {
  isSearching       : false,
  movieList         : [],
  charactersDetails : [] // Es arreglo u objeto ?
}

export default function reducer (state = initialState, action){
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_SEARCHING:
      return {
        // Crea un object 'state' en donde solamente pisa el/los atributos que se incluyen despues de la ","
        ...state,
        isSearching : true
      }

    /**
     * Me esta quedando un object asi:
     * 
     * state = {
     *  isSearching: true, <<<<<<<<<< CAMBIÓ
     *  movieList =[],
     *  charactersDetails : null
     * }
     */

    case ActionTypes.FETCH_MOVIES_SEARCHED:
      return {
        ...state,
        isSearching : false,
        movieList   : state.movieList.concat(action.payload.results)
      }

    case ActionTypes.FETCH_MOVIES_SEARCHED_ERROR:
      return {
        ...state,
        isSearching : false,
        error       : action.payload.toString() //Agrega el atributo 'error' al objeto
      }

    case ActionTypes.FETCH_MOVIES_CHARACTERS_SEARCHING:
      return {
        ...state,
        isSearching       : true,
        total             : action.payload.total,
        charactersDetails : []
      }
    case ActionTypes.FETCH_MOVIES_CHARACTERS_SEARCHED:
      const newCaractersDetail = state.charactersDetails.concat(action.payload)

      return {
        ...state,
        isSearching       : newCaractersDetail.length !== state.total,
        charactersDetails : newCaractersDetail
      }
    case ActionTypes.FETCH_MOVIES_CHARACTERS_SEARCHED_ERROR:
      return {
        ...state,
        isSearching : false,
        error       : action.payload.toString()
      }

    default:
      return state
  }
}
