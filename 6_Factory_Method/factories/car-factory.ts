//Concrete creator

import { Car } from "../vehicle/car";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class CarFactory extends VehicleFactory {
    //Concrete creator serve para implementar o factory method, dentre outras funcionalidades.
    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName);
    }
}