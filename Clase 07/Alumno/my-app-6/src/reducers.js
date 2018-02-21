import { combineReducers } from 'redux'

// Importo los distintos reducers que hay en la app

import moviePage from './MoviePage/reducer'


// Exporto todos los reducers bajo 1 solo

export default combineReducers({
  moviePage
})
