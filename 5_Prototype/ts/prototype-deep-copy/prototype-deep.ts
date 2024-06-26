export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }
    
    clone(): Person {
        const newObj = new Person(this.name, this.age);
        newObj.addresses = this.addresses.map((item) => item.clone())
        return newObj;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address implements Prototype {
    constructor(public street: string, public number: number) { }

    clone(): Address {
        return new Address(this.street, this.number);
    }
    
}

const address1 = new Address('Avenida São João', 2982);
const person1 = new Person("Henrique", 20);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person2);
person2.name = 'Pedro';
console.log(person2.name)