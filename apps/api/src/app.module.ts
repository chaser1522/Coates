import { Module } from '@nestjs/common'
import { InventoryController } from './inventory/inventory.controller'
import { PartsController } from './parts/parts.controller'
import { ProductsController } from './products/products.controller'
import { UploadsController } from './uploads/uploads.controller'

@Module({
  imports: [],
  controllers: [InventoryController, PartsController, ProductsController, UploadsController],
  providers: [],
})
export class AppModule {}
