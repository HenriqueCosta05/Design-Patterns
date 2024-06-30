//Concrete Creator

import { Bicycle } from "../vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory {
    //Concrete creator serve para implementar o factory methods, dentre outras funcionalidades
    getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName);
    }
}