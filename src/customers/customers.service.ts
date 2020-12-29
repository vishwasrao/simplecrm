import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CustomersService {
  private customers = [];

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(id: string) {
    return this.customers.filter((d) => d.id === id);
  }

  createCustomer(firstName: string, lastName: string, email: string) {
    const customerObject = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    this.customers.push(customerObject);

    return this.customers.push();
  }
}
