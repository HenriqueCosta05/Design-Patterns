//Classe Creator

import { Vehicle } from "../vehicle/vehicle";

export abstract class VehicleFactory {
    abstract getVehicle(vehicleName: string): Vehicle;
        /* Observação: o uso de if's viola o OCP (Open-Close Principle), como no caso abaixo:

        if (vehicleName === 'Fusca') {
            return new Car('Fusca');
        }
        
        Portanto, o método é abstrato pois as subclasses decidem qual a implementação que melhor convém.
        */
    
    //A classe pode ter implementação de seus métodos, contanto que o método factory seja abstrato. 
    pickUp(customerName: string, vehicleName: string): Vehicle {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}