import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerServices: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customerServices.getCustomers();
  }

  @Post()
  createCustomer(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
  ) {
    return this.customerServices.createCustomer(firstName, lastName, email);
  }
}
