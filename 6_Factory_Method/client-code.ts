import { CarFactory } from "./factories/car-factory";
import { Car } from "./vehicle/car";

//Exemplo de código cliente sem a implementação de Factory (sintoma principal: uso excessivo de 'new')
const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

//Exemplo de código cliente com a implementação de Factory
const carFactory = new CarFactory();
const refactoredFusca = carFactory.getVehicle('Fusca');
refactoredFusca.pickUp('Joaquim');
refactoredFusca.stop();
