import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@gmail.com',
    },
  ];

  getCustomers() {
    return this.customers;
  }
}
