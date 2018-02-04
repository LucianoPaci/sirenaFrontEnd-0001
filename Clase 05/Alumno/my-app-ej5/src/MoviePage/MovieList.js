import React from 'react'
import Movie from './Movie'



export default function MovieList({ filteredMovies = [], onClickMovie }) {

  return (
    <ul>
      {filteredMovies.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          year={movie.year}
          actors={movie.actors}
          url={movie.url}
          onClickMovie={onClickMovie}
        />
      )
      )}

    </ul>

  )
}