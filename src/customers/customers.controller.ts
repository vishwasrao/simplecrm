import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerServices: CustomersService) {}

  @Get()
  getAllCustomers() {
    return this.customerServices.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customerServices.getCustomerById(id);
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
