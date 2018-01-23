
function User (firstName, age, isAdmin = false, telephones = []) {
    this.age = age
    

    this.addTelephone = function (phone) {
        telephones.push(phone) 
    }

    this.changeAge = function (a) {
        this.age = a
    }

    this.showAll = function() {
        const message = `Mi nombre es ${firstName}, tengo ${this.age} años y mis telefonos son ${telephones.join(' / ')}`
        console.log( message )
    }

}

const user = new User ('Pepe', 28)


user.addTelephone('1234')
user.addTelephone('5678')
user.showAll()

user.changeAge (40)
user.addTelephone('9123')


user.showAll()


