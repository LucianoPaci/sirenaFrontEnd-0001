import React, { Component } from 'react'
import MovieInput from './MovieInput'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import { request } from './utils'
import { connect } from 'react-redux'
import Movie from './Movie'
import { fetchMovies, fetchCharactersDetails } from './actions'
const styles = {
  root : {
    display : 'flex'
  }
}

class MoviePage extends Component {
  constructor () {
    super()
    this.state = {
      movieTitle : ''
    }
  }

  componentWillMount () {
    const { fetchMovies } = this.props
    fetchMovies()
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   const { movieList, caractersDetailCount } = this.state
  //   const {
  //     movieList        : nextMovieList,
  //     charactersDetail : nextCharactersDetail
  //   } = nextState
  //   console.log(caractersDetailCount === nextCharactersDetail)
  //   if (
  //     movieList !== nextMovieList ||
  //     caractersDetailCount === nextCharactersDetail.length
  //   ) {
  //     return true
  //   }
  //   return false
  // }

  handleClickMovie = (url) => {
    const { fetchCharactersDetails } = this.props
    fetchCharactersDetails(url)
  }

  handleInputChange = (event) => {
    this.setState({ movieTitle: event.target.value })
  }

  render () {
    const { movieList, charactersDetails, isSearching, error } = this.props
    const { movieTitle } = this.state

    const filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(movieTitle.toLowerCase())
    )

    return (
      <div style={styles.root}>
        {
          isSearching ? 'Searching...' :
          null}
        {error || null}
        <div>
          <MovieInput onInputChange={this.handleInputChange} />
          <MovieList
            filteredMovies={filteredMovies}
            onClickMovie={this.handleClickMovie}
          />
        </div>
        <div>
          {
            charactersDetails && !isSearching ? <MovieDetail
              characters={charactersDetails}
            /> :
            null}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){
  const {
    moviePage : { movieList, charactersDetails, isSearching, error }
  } = state

  return {
    movieList,
    charactersDetails,
    isSearching,
    error
  }
}

const mapDispatchToProps = {
  fetchMovies,
  fetchCharactersDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
