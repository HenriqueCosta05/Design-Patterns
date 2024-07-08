import { CustomerProtocol } from ".";

export class IndividualCustomer implements CustomerProtocol {
  constructor(public name: string) {}
}
