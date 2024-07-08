import { CustomerProtocol } from '../customer';
import { VehicleProtocol } from '../vehicle';

export interface CreateVehicleCustomerProtocol {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(carName: string, customerName: string): VehicleProtocol;
}
