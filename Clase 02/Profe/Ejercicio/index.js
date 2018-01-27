class Movie {
  constructor (title, year, director, actors = []) {
    this._title = title
    this._year = year
    this._director = director
    this._actors = actors.slice()
  }

  get title () {
    return this._title
  }

  get year () {
    return this._year
  }
  get director () {
    return this._director
  }

  get actors () {
    return this._actors
  }

  set title (title) {
    this._title = title
  }

  set year (year) {
    this._year = year
  }
  set director (director) {
    this._director = director
  }

  set actor (actor) {
    this._actors.push(actor)
  }

  searchActor (firstName) {
    return !!this._actors.find((actor) => actor.firstName === firstName)
  }

  showAll () {
    console.log(
      `${this._title} ${this._year} ${this._director} ${this._actors
        .map((actor) => actor.firstName)
        .sort()
        .join(' / ')}`
    )
  }
}

const actors = [
  {
    firstName: 'Mel',
    lastName: 'Gibson'
  },
  {
    firstName: 'Val',
    lastName: 'Kilmer'
  },
  {
    firstName: 'Angelina',
    lastName: 'Jolie'
  }
]

const movie = new Movie('Matrix', 1999, 'Wachosky', actors)

movie.showAll()

console.log(movie.searchActor('Pato'))
