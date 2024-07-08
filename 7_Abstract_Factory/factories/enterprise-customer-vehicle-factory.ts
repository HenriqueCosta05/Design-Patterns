import {CustomerProtocol, EnterpriseCustomer } from '../customer';
import {CreateVehicleCustomerProtocol } from '../factories';
import { EnterpriseCar, VehicleProtocol} from '../vehicle';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerProtocol
{
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(carName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName)
    return new EnterpriseCar(carName, customer);
  }
}
