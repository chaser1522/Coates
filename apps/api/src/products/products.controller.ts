import { Controller, Get } from '@nestjs/common'
import fixtures from '../data/fixtures.json'

@Controller('products')
export class ProductsController {
  @Get()
  list() {
    return fixtures.products
  }
}
