import { CustomerProtocol } from "../customer";
import { VehicleProtocol } from '.'

export class IndividualCar implements VehicleProtocol {
  constructor(public name: string, private readonly customer: CustomerProtocol) { }

  pickup(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
