import { CustomerProtocol } from ".";

export class EnterpriseCustomer implements CustomerProtocol {
    constructor(public name: string) {}
}