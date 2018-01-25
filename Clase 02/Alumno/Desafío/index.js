
class User {

    constructor(firstName, lastName, dni, isAdmin = false, telephones = []){

        this._firstName = firstName
        this._lastName = lastName
        this._dni = dni
        this._isAdmin = isAdmin
        this._telephones = telephones
    }
    
    set firstName (name) {
        this._firstName = name
    }
    set lastName (lastname) {
        this._lastName = lastname
    }
    set dni (id) {
        this._dni = id
    }
    set telephone (telephone) {
        this._telephones.push({ 
            number: telephone, 
            isMobile: telephone.number.startsWith(+549) 
        })
    }

    set isAdmin (bool) {
        this._isAdmin = bool
    }

    get firstName () {
        return this._firstName
    }

    get lastName () {
        return this._lastName
    }

    
    get dni () {
        return this._dni
    }
    get isAdmin () {
        return this._isAdmin
    }

    get telephones () {
        return this._telephones
    }

    get telephonesNumbers () {
        return this._telephones.map(phone => phone.number)
    }
    showAll() {
        return 
        `${this._firstName} ${this._lastName} ${this._dni} ${this.telephonesNumbers}`
    }

}

const studentsList = [
    {
      firstName: 'Mercedes',
      lastName: 'Baylac',
      dni: 54353353,
      telephones: [ { number: +54912345678, isMobile: true }, { number: +54987654321, isMobile: true } ]
    },
    {
      firstName: 'Julian',
      lastName: 'Bonpland',
      dni: 54533343,
      telephones: [ { number: +5478987865, isMobile: false }, { number: +54987654321, isMobile: true } ]
    },
    { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
    { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
    {
      firstName: 'Barbara',
      lastName: 'Pavan',
      dni: 54357512,
      telephones: [ { number: +54936473829, isMobile: true } ]
    }
  ]




const users = studentsList.map(student => (new User (student.firstName, student.lastName, student.dni, undefined, student.telephones)))


console.log(users.map(each => each.telephonesNumbers).join(' / '))


