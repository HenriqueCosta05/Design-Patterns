import {CustomerProtocol} from '../customer';
import {VehicleProtocol} from '../vehicle';

export class EnterpriseCar implements VehicleProtocol {
  constructor(public name: string, private readonly customer: CustomerProtocol) {}

  pickup(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
