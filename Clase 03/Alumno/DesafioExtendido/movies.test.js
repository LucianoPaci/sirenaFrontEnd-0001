const movies = require('./movies').movies
const punto3 = require('./punto3')
const punto4 = require('./punto4')

describe('Punto 3. Usando Array#reduce reproducir la funcionaliadad de los metodos map, filter, find e indexOf', () => {
  ;((punto3.mapMoviesToTitles && test) ||
    test.skip)(
    'a. `mapMoviesToTitles` recibe un array de Movies y devuelva un array con los respectivos titulos',
    () => {
      expect(punto3.mapMoviesToTitles(movies)).toEqual([
        'The Godfather',
        'The Shawshank Redemption',
        'Pulp Fiction',
        'Star Wars',
        'Forrest Gump',
        'The Dark Knight',
        'GoodFellas',
        'The Godfather Part II',
        'Star Wars: Episode V - The Empire Strikes Back (1980)',
        'The Matrix',
        'Fight Club',
        "Schindler's List",
        'Indiana Jones and the Raiders of the Lost Ark',
        'Saving Private Ryan',
        'Gladiator',
        'The Silence of the Lambs',
        'Back to the Future',
        'The Lord of the Rings - The Return of the King (2003)',
        'The Lord of the Rings: The Fellowship of the Ring',
        "One Flew Over the Cuckoo's Nest",
        'Casablanca',
        'Braveheart',
        'Apocalypse Now',
        'The Shining',
        'Citizen Kane',
        'Inception',
        'Titanic',
        'Seven',
        'Jaws',
        'Jurassic Park',
        'The Usual Suspects',
        'The Good, The Bad & The Ugly',
        'Die Hard',
        'Terminator 2: Judgment Day',
        'Rocky',
        'Taxi Driver',
        'The Lord of the Rings - The Two Towers (2002)',
        'A Clockwork Orange',
        'Full Metal Jacket',
        'Psycho',
        'The Terminator',
        'The Green Mile',
        'The Big Lebowski',
        'E.T. the Extra-Terrestrial',
        'The Departed',
        'Alien',
        "It's a Wonderful Life",
        'Toy Story',
        'The Wizard of Oz',
        '2001: A Space Odyssey'
      ])
    }
  )
  ;((punto3.ninetiesMovies && test) ||
    test.skip)(
    'b. `ninetiesMovies` recibe un array de Movies y devuelva un array que contenga solo peliculas estrenadas entre el 1990 y 1999',
    () => {
      expect(punto3.ninetiesMovies(movies)).toEqual([
        {
          title  : 'The Godfather',
          actors : [ 'Al Pacino', 'Marlon Brando', 'Robert Duvall' ],
          year   : 1972
        },
        {
          title  : 'The Shawshank Redemption',
          actors : [ 'Morgan Freeman', 'Rita Hayworth', 'Tim Robbins' ],
          year   : 1994
        },
        {
          title  : 'Pulp Fiction',
          actors : [ 'John Travolta', 'Bruce Willis', 'Uma Thurman' ],
          year   : 1994
        },
        {
          title  : 'Star Wars',
          actors : [ 'Harrison Ford', 'Carrie Fisher', 'Mark Hamill' ],
          year   : 1977
        },
        {
          title  : 'Forrest Gump',
          actors : [ 'Tom Hanks', 'Kurt Russell', 'Sally Field' ],
          year   : 1994
        },
        {
          title  : 'GoodFellas',
          actors : [ 'Robert De Niro', 'Samuel L. Jackson', 'Joe Pesci' ],
          year   : 1990
        },
        {
          title  : 'The Godfather Part II',
          actors : [ 'Al Pacino', 'Robert De Niro', 'Robert Duvall' ],
          year   : 1974
        },
        {
          title  : 'Star Wars: Episode V - The Empire Strikes Back (1980)',
          actors : [ 'Harrison Ford', 'Carrie Fisher', 'Mark Hamill' ],
          year   : 1980
        },
        {
          title  : 'The Matrix',
          actors : [ 'Keanu Reeves', 'Hugo Weaving', 'Carrie-Anne Moss' ],
          year   : 1999
        },
        {
          title  : 'Fight Club',
          actors : [ 'Brad Pitt', 'Jared Leto', 'Helena Bonham Carter' ],
          year   : 1999
        },
        {
          title  : "Schindler's List",
          actors : [ 'Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley' ],
          year   : 1993
        },
        {
          title  : 'Indiana Jones and the Raiders of the Lost Ark',
          actors : [ 'Harrison Ford', 'Alfred Molina', 'Karen Allen' ],
          year   : 1981
        },
        {
          title  : 'Saving Private Ryan',
          actors : [ 'Tom Hanks', 'Matt Damon', 'Vin Diesel' ],
          year   : 1998
        },
        {
          title  : 'The Silence of the Lambs',
          actors : [ 'Jodie Foster', 'Anthony Hopkins', 'Chris Isaak' ],
          year   : 1991
        },
        {
          title  : 'Back to the Future',
          actors : [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson' ],
          year   : 1985
        },
        {
          title  : "One Flew Over the Cuckoo's Nest",
          actors : [ 'Jack Nicholson', 'Danny DeVito', 'Christopher Lloyd' ],
          year   : 1975
        },
        {
          title  : 'Casablanca',
          actors : [ 'Ingrid Bergman', 'Humphrey Bogart', 'Peter Lorre' ],
          year   : 1942
        },
        {
          title  : 'Braveheart',
          actors : [ 'Mel Gibson', 'Sophie Marceau', 'Brendan Gleeson' ],
          year   : 1995
        },
        {
          title  : 'Apocalypse Now',
          actors : [ 'Marlon Brando', 'Harrison Ford', 'Robert Duvall' ],
          year   : 1979
        },
        {
          title  : 'The Shining',
          actors : [ 'Jack Nicholson', 'Shelley Duvall', 'Scatman Crothers' ],
          year   : 1980
        },
        {
          title  : 'Citizen Kane',
          actors : [ 'Orson Welles', 'Alan Ladd', 'Agnes Moorehead' ],
          year   : 1941
        },
        {
          title  : 'Titanic',
          actors : [ 'Leonardo DiCaprio', 'Kate Winslet', 'Kathy Bates' ],
          year   : 1997
        },
        {
          title  : 'Seven',
          actors : [ 'Brad Pitt', 'Gwyneth Paltrow', 'Morgan Freeman' ],
          year   : 1995
        },
        {
          title  : 'Jaws',
          actors : [ 'Steven Spielberg', 'Richard Dreyfuss', 'Roy Scheider' ],
          year   : 1975
        },
        {
          title  : 'Jurassic Park',
          actors : [ 'Samuel L. Jackson', 'Jeff Goldblum', 'Richard Attenborough' ],
          year   : 1993
        },
        {
          title  : 'The Usual Suspects',
          actors : [ 'Kevin Spacey', 'Benicio del Toro', 'Gabriel Byrne' ],
          year   : 1995
        },
        {
          title  : 'The Good, The Bad & The Ugly',
          actors : [ 'Clint Eastwood', 'Viggo Mortensen', 'Mark Strong' ],
          year   : 1966
        },
        {
          title  : 'Die Hard',
          actors : [ 'Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia' ],
          year   : 1988
        },
        {
          title  : 'Terminator 2: Judgment Day',
          actors : [ 'Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton' ],
          year   : 1991
        },
        {
          title  : 'Rocky',
          actors : [ 'Sylvester Stallone', 'Joe Frazier', 'Burgess Meredith' ],
          year   : 1976
        },
        {
          title  : 'Taxi Driver',
          actors : [ 'Robert De Niro', 'Jodie Foster', 'Martin Scorsese' ],
          year   : 1976
        },
        {
          title  : 'A Clockwork Orange',
          actors : [ 'Malcolm McDowell', 'Warren Clarke', 'Steven Berkoff' ],
          year   : 1971
        },
        {
          title  : 'Full Metal Jacket',
          actors : [ 'Stanley Kubrick', "Vincent D'Onofrio", 'R. Lee Ermey' ],
          year   : 1987
        },
        {
          title  : 'Psycho',
          actors : [ 'Alfred Hitchcock', 'Janet Leigh', 'Anthony Perkins' ],
          year   : 1960
        },
        {
          title  : 'The Terminator',
          actors : [ 'Arnold Schwarzenegger', 'Bill Paxton', 'Linda Hamilton' ],
          year   : 1984
        },
        {
          title  : 'The Green Mile',
          actors : [ 'Tom Hanks', 'Gary Sinise', 'Sam Rockwell' ],
          year   : 1999
        },
        {
          title  : 'The Big Lebowski',
          actors : [ 'Julianne Moore', 'Jeff Bridges', 'Tara Reid' ],
          year   : 1998
        },
        {
          title  : 'E.T. the Extra-Terrestrial',
          actors : [ 'Drew Barrymore', 'Erika Eleniak', 'Debra Winger' ],
          year   : 1982
        },
        {
          title  : 'Alien',
          actors : [ 'Sigourney Weaver', 'John Hurt', 'Ian Holm' ],
          year   : 1979
        },
        {
          title  : "It's a Wonderful Life",
          actors : [ 'James Stewart', 'Donna Reed', 'Lionel Barrymore' ],
          year   : 1946
        },
        {
          title  : 'Toy Story',
          actors : [ 'Tom Hanks', 'Tim Allen', 'Don Rickles' ],
          year   : 1995
        },
        {
          title  : 'The Wizard of Oz',
          actors : [ 'Judy Garland', 'Margaret Hamilton', 'Frank Morgan' ],
          year   : 1939
        }
      ])
    }
  )
  ;((punto3.melGibsonMovies && test) ||
    test.skip)(
    'c. `melGibsonMovies` recibe un array de Movies y devuelva un array que contenga solo peliculas en las que `Mel Gibson` sea un actor',
    () => {
      expect(punto3.melGibsonMovies(movies)).toEqual([
        {
          title  : 'Braveheart',
          actors : [ 'Mel Gibson', 'Sophie Marceau', 'Brendan Gleeson' ],
          year   : 1995
        }
      ])
    }
  )
  ;((punto3.findActorsOfCasablanca && test) ||
    test.skip)(
    'c. `findActorsOfCasablanca` recibe un array de Movies y devuelva un array que contenga solo los actores de la pelicula `Casablanca`',
    () => {
      expect(punto3.findActorsOfCasablanca(movies)).toEqual([ 'Ingrid Bergman', 'Humphrey Bogart', 'Peter Lorre' ])
    }
  )
})

describe('Punto 4. Crear las mismas funciones del punto anterior pero usando las funciones nativas de Array', () => {
  ;((punto4.mapMoviesToTitles && test) ||
    test.skip)(
    'a. `mapMoviesToTitles` recibe un array de Movies y devuelva un array con los respectivos titulos',
    () => {
      expect(punto4.mapMoviesToTitles(movies)).toEqual([
        'The Godfather',
        'The Shawshank Redemption',
        'Pulp Fiction',
        'Star Wars',
        'Forrest Gump',
        'The Dark Knight',
        'GoodFellas',
        'The Godfather Part II',
        'Star Wars: Episode V - The Empire Strikes Back (1980)',
        'The Matrix',
        'Fight Club',
        "Schindler's List",
        'Indiana Jones and the Raiders of the Lost Ark',
        'Saving Private Ryan',
        'Gladiator',
        'The Silence of the Lambs',
        'Back to the Future',
        'The Lord of the Rings - The Return of the King (2003)',
        'The Lord of the Rings: The Fellowship of the Ring',
        "One Flew Over the Cuckoo's Nest",
        'Casablanca',
        'Braveheart',
        'Apocalypse Now',
        'The Shining',
        'Citizen Kane',
        'Inception',
        'Titanic',
        'Seven',
        'Jaws',
        'Jurassic Park',
        'The Usual Suspects',
        'The Good, The Bad & The Ugly',
        'Die Hard',
        'Terminator 2: Judgment Day',
        'Rocky',
        'Taxi Driver',
        'The Lord of the Rings - The Two Towers (2002)',
        'A Clockwork Orange',
        'Full Metal Jacket',
        'Psycho',
        'The Terminator',
        'The Green Mile',
        'The Big Lebowski',
        'E.T. the Extra-Terrestrial',
        'The Departed',
        'Alien',
        "It's a Wonderful Life",
        'Toy Story',
        'The Wizard of Oz',
        '2001: A Space Odyssey'
      ])
    }
  )
  ;((punto4.ninetiesMovies && test) ||
    test.skip)(
    'b. `ninetiesMovies` recibe un array de Movies y devuelva un array que contenga solo peliculas estrenadas entre el 1990 y 1999',
    () => {
      expect(punto4.ninetiesMovies(movies)).toEqual([
        {
          title  : 'The Godfather',
          actors : [ 'Al Pacino', 'Marlon Brando', 'Robert Duvall' ],
          year   : 1972
        },
        {
          title  : 'The Shawshank Redemption',
          actors : [ 'Morgan Freeman', 'Rita Hayworth', 'Tim Robbins' ],
          year   : 1994
        },
        {
          title  : 'Pulp Fiction',
          actors : [ 'John Travolta', 'Bruce Willis', 'Uma Thurman' ],
          year   : 1994
        },
        {
          title  : 'Star Wars',
          actors : [ 'Harrison Ford', 'Carrie Fisher', 'Mark Hamill' ],
          year   : 1977
        },
        {
          title  : 'Forrest Gump',
          actors : [ 'Tom Hanks', 'Kurt Russell', 'Sally Field' ],
          year   : 1994
        },
        {
          title  : 'GoodFellas',
          actors : [ 'Robert De Niro', 'Samuel L. Jackson', 'Joe Pesci' ],
          year   : 1990
        },
        {
          title  : 'The Godfather Part II',
          actors : [ 'Al Pacino', 'Robert De Niro', 'Robert Duvall' ],
          year   : 1974
        },
        {
          title  : 'Star Wars: Episode V - The Empire Strikes Back (1980)',
          actors : [ 'Harrison Ford', 'Carrie Fisher', 'Mark Hamill' ],
          year   : 1980
        },
        {
          title  : 'The Matrix',
          actors : [ 'Keanu Reeves', 'Hugo Weaving', 'Carrie-Anne Moss' ],
          year   : 1999
        },
        {
          title  : 'Fight Club',
          actors : [ 'Brad Pitt', 'Jared Leto', 'Helena Bonham Carter' ],
          year   : 1999
        },
        {
          title  : "Schindler's List",
          actors : [ 'Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley' ],
          year   : 1993
        },
        {
          title  : 'Indiana Jones and the Raiders of the Lost Ark',
          actors : [ 'Harrison Ford', 'Alfred Molina', 'Karen Allen' ],
          year   : 1981
        },
        {
          title  : 'Saving Private Ryan',
          actors : [ 'Tom Hanks', 'Matt Damon', 'Vin Diesel' ],
          year   : 1998
        },
        {
          title  : 'The Silence of the Lambs',
          actors : [ 'Jodie Foster', 'Anthony Hopkins', 'Chris Isaak' ],
          year   : 1991
        },
        {
          title  : 'Back to the Future',
          actors : [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson' ],
          year   : 1985
        },
        {
          title  : "One Flew Over the Cuckoo's Nest",
          actors : [ 'Jack Nicholson', 'Danny DeVito', 'Christopher Lloyd' ],
          year   : 1975
        },
        {
          title  : 'Casablanca',
          actors : [ 'Ingrid Bergman', 'Humphrey Bogart', 'Peter Lorre' ],
          year   : 1942
        },
        {
          title  : 'Braveheart',
          actors : [ 'Mel Gibson', 'Sophie Marceau', 'Brendan Gleeson' ],
          year   : 1995
        },
        {
          title  : 'Apocalypse Now',
          actors : [ 'Marlon Brando', 'Harrison Ford', 'Robert Duvall' ],
          year   : 1979
        },
        {
          title  : 'The Shining',
          actors : [ 'Jack Nicholson', 'Shelley Duvall', 'Scatman Crothers' ],
          year   : 1980
        },
        {
          title  : 'Citizen Kane',
          actors : [ 'Orson Welles', 'Alan Ladd', 'Agnes Moorehead' ],
          year   : 1941
        },
        {
          title  : 'Titanic',
          actors : [ 'Leonardo DiCaprio', 'Kate Winslet', 'Kathy Bates' ],
          year   : 1997
        },
        {
          title  : 'Seven',
          actors : [ 'Brad Pitt', 'Gwyneth Paltrow', 'Morgan Freeman' ],
          year   : 1995
        },
        {
          title  : 'Jaws',
          actors : [ 'Steven Spielberg', 'Richard Dreyfuss', 'Roy Scheider' ],
          year   : 1975
        },
        {
          title  : 'Jurassic Park',
          actors : [ 'Samuel L. Jackson', 'Jeff Goldblum', 'Richard Attenborough' ],
          year   : 1993
        },
        {
          title  : 'The Usual Suspects',
          actors : [ 'Kevin Spacey', 'Benicio del Toro', 'Gabriel Byrne' ],
          year   : 1995
        },
        {
          title  : 'The Good, The Bad & The Ugly',
          actors : [ 'Clint Eastwood', 'Viggo Mortensen', 'Mark Strong' ],
          year   : 1966
        },
        {
          title  : 'Die Hard',
          actors : [ 'Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia' ],
          year   : 1988
        },
        {
          title  : 'Terminator 2: Judgment Day',
          actors : [ 'Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton' ],
          year   : 1991
        },
        {
          title  : 'Rocky',
          actors : [ 'Sylvester Stallone', 'Joe Frazier', 'Burgess Meredith' ],
          year   : 1976
        },
        {
          title  : 'Taxi Driver',
          actors : [ 'Robert De Niro', 'Jodie Foster', 'Martin Scorsese' ],
          year   : 1976
        },
        {
          title  : 'A Clockwork Orange',
          actors : [ 'Malcolm McDowell', 'Warren Clarke', 'Steven Berkoff' ],
          year   : 1971
        },
        {
          title  : 'Full Metal Jacket',
          actors : [ 'Stanley Kubrick', "Vincent D'Onofrio", 'R. Lee Ermey' ],
          year   : 1987
        },
        {
          title  : 'Psycho',
          actors : [ 'Alfred Hitchcock', 'Janet Leigh', 'Anthony Perkins' ],
          year   : 1960
        },
        {
          title  : 'The Terminator',
          actors : [ 'Arnold Schwarzenegger', 'Bill Paxton', 'Linda Hamilton' ],
          year   : 1984
        },
        {
          title  : 'The Green Mile',
          actors : [ 'Tom Hanks', 'Gary Sinise', 'Sam Rockwell' ],
          year   : 1999
        },
        {
          title  : 'The Big Lebowski',
          actors : [ 'Julianne Moore', 'Jeff Bridges', 'Tara Reid' ],
          year   : 1998
        },
        {
          title  : 'E.T. the Extra-Terrestrial',
          actors : [ 'Drew Barrymore', 'Erika Eleniak', 'Debra Winger' ],
          year   : 1982
        },
        {
          title  : 'Alien',
          actors : [ 'Sigourney Weaver', 'John Hurt', 'Ian Holm' ],
          year   : 1979
        },
        {
          title  : "It's a Wonderful Life",
          actors : [ 'James Stewart', 'Donna Reed', 'Lionel Barrymore' ],
          year   : 1946
        },
        {
          title  : 'Toy Story',
          actors : [ 'Tom Hanks', 'Tim Allen', 'Don Rickles' ],
          year   : 1995
        },
        {
          title  : 'The Wizard of Oz',
          actors : [ 'Judy Garland', 'Margaret Hamilton', 'Frank Morgan' ],
          year   : 1939
        }
      ])
    }
  )
  ;((punto4.melGibsonMovies && test) ||
    test.skip)(
    'c. `melGibsonMovies` recibe un array de Movies y devuelva un array que contenga solo peliculas en las que `Mel Gibson` sea un actor',
    () => {
      expect(punto4.melGibsonMovies(movies)).toEqual([
        {
          title  : 'Braveheart',
          actors : [ 'Mel Gibson', 'Sophie Marceau', 'Brendan Gleeson' ],
          year   : 1995
        }
      ])
    }
  )
  ;((punto4.findActorsOfCasablanca && test) ||
    test.skip)(
    'c. `findActorsOfCasablanca` recibe un array de Movies y devuelva un array que contenga solo los actores de la pelicula `Casablanca`',
    () => {
      expect(punto4.findActorsOfCasablanca(movies)).toEqual([ 'Ingrid Bergman', 'Humphrey Bogart', 'Peter Lorre' ])
    }
  )
})
