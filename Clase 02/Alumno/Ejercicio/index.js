
class Movie {
    constructor (title, year, director, actors = []) {
        this._title = title
        this._year = year
        this._director = director
        this._actors = actors
    }

    get year () {
        return this._year
    }

    get title () {
        return this._title
    }

    get director () {
        return this._director
    }

    get actors () {
        return this._actors
    }

    set year (year) {
        this._year = year
    }

    set title (title) {
     this._title = title
    }

    set director (director) {
        this._director = director
    }
    
    set actor (actor) {
        this._actors.push(actor)
    }

    searchActor (name) {
        return (this._actors.find((actor) => actor.firstName === name) ? true : false )
        // return !!(this._actors.find((actor) => actor.firstName === name)

    }

    actorName () {
        return this._actors.map((name) => name.firstName)
    }


}

const actors = [
    {
        firstName : 'Mel',
        lastName : 'Gibson'
    },
    {
        firstName : 'Val',
        lastName : 'Kilmer'
    },
    {
        firstName : 'Angelina',
        lastName : 'Jolie'
    }
]

const movieA = new Movie ('Brave Heart', 1993, 'Spielberg', actors)


console.log(movieA)
console.log(movieA.actorName())

const Johnny = {
    firstName : 'Johnny',
    lastName : 'Depp'
}
movieA.year = 2011
movieA.title = 'Avatar'
movieA.actor = Johnny
movieA.director = 'Cameron'
console.log(movieA)
console.log(movieA.actorName())
console.log(movieA.searchActor('Johnny'))