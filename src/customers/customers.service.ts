import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CustomersService {
  private customers = [];

  getCustomers() {
    return this.customers;
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
