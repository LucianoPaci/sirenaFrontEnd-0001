
import React, { Component } from 'react'
import MovieInput from './MovieInput'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import { request } from './utils'
const styles = {
  root: {
    display: 'flex'
  }
}

export default class MoviePage extends Component {

  constructor() {
    super()
    this.state = {
      movieTitle: '',
      movieDetail: null,
      movieList: []
    }
  }

  componentWillMount() {
    this.requestToSWApi('https://swapi.co/api/films/')
  }

  requestToSWApi = (url) => {
    request(url, 'GET')
      .then((response) => {
        this.addNewMovies(response.results)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }


  addNewMovies = (results) => {

    const { movieList } = this.state
    // const movieList = this.state.movieList
    this.setState({
      movieList: movieList.concat(results)
    })
  }

  handleClickMovie = (url) => {
    request(url, 'GET')
      .then((response) => {
        console.log('Detalle de pelicula : ', response)
        this.setState({
          movieDetail: response
        })
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  handleInputChange = (event) => {
    this.setState({ movieTitle: event.target.value })
  }

  render() {
    //This renders the object that is stored everytime a movie is clicked
    console.log('Detalle de pelicula en RENDER', this.state.movieDetail)

    // console.log('Titulo de pellicula en  RENDER', this.state.movieTitle)
    // const { movieList = [] } = this.props

    const { movieTitle, movieDetail, movieList } = this.state

    const filteredMovies = movieList.filter((movie) =>
      movie.title.includes(movieTitle.toLowerCase())
    )

    console.log('Filtrado', filteredMovies, movieList)
    return (
      <div>
        <MovieInput onInputChange={this.handleInputChange} />
        <div style={styles.root}>
          <MovieList
            filteredMovies={filteredMovies}
            onClickMovie={this.handleClickMovie} />


          {movieDetail ?
            <MovieDetail
              title={movieDetail.title}
              year={movieDetail.year}
              characters={movieDetail.characters}
            /> :
            null}


        </div>
      </div>
    )
  }
}


