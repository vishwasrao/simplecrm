import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  private customers = [];

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(id: string) {
    return this.customers.filter((d) => d.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    const { firstName, lastName, email, phoneNumber } = createCustomerDto;

    const customerObject = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    };
    return this.customers.push(customerObject);
  }
}
