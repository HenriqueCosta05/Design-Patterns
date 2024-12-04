import { IndividualCustomer, CustomerProtocol } from '../customer'
import { CreateVehicleCustomerProtocol } from '.'
import { VehicleProtocol, IndividualCar } from '../vehicle'

export class IndividualCustomerVehicleFactory implements CreateVehicleCustomerProtocol {
    createCustomer(customerName: string): CustomerProtocol {
        return new IndividualCustomer(customerName);
    }
    createVehicle(carName: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName)
        return new IndividualCar(carName, customer);
    }

}