import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerServices: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customerServices.getCustomers();
  }
}
