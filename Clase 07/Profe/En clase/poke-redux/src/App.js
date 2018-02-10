import React, { Component } from 'react'
import PokemonPage from './PokemonPage'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import { request } from './utils'

const api = 'https://pokeapi.co/api/v2'

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ api, request })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PokemonPage />
      </Provider>
    )
  }
}

export default App
