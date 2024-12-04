const personPrototype = {
    firstName: "Henrique",
    lastName: "Costa",
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const anotherPerson = Object.create(personPrototype)
console.log(anotherPerson) //Retorna um objeto vazio
console.log(anotherPerson.fullName) //Retorna um erro, pois não existe essa propriedade no prototype
console.log(anotherPerson.firstName) //Retorna "Henrique"