function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age; 
}    

const personPrototype = {
  firstName: 'Henrique',
  lastName: 'Costa',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};


Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'Teste';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Henrique', "Costa", 20);
console.log(person1.fullName());

const person2 = new SubPerson('Henrique', 'Costa', 25);
console.log(person2);
console.log(person2.fullName());