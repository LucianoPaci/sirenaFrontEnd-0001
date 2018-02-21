import React, { Component } from 'react'
import MoviePage from './MoviePage'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { request } from './utils'

const api = 'https://swapi.co/api/'

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
        <MoviePage />
      </Provider>
    )
  }
}

export default App
