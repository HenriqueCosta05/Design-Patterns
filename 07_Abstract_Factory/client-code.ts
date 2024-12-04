import { EnterpriseCreateVehicleCustomerFactory, IndividualCustomerVehicleFactory} from './factories'

//Instanciando as factories
const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fit', 'Pedro');
const car2 = individualFactory.createVehicle('March', 'Maria');

car1.pickup();
car2.pickup();