import { Vehicle } from "./vehicle";

/*
    Observação: As classes concretas implementam os métodos de vehicle, que devem ser escritos conforme as particularidades de cada caso.
    Entretanto, como este é um exemplo simples, o código foi repetido para fins didáticos.
*/

export class Car implements Vehicle {
        constructor(private name: string) {}

    pickUp(customerName: string): void {
        console.log(`${this.name} está buscando ${customerName}`);
    }
    stop(): void {
        console.log(`${this.name} parou`);
    }
    
}