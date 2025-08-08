import { Controller, Get, Query } from '@nestjs/common'
import fixtures from '../data/fixtures.json'

@Controller('inventory')
export class InventoryController {
  @Get()
  get(@Query('sku') sku?: string) {
    if (!sku) return { error: 'sku required' }
    const item = (fixtures as any).inventory[sku]
    if (!item) return { sku, onHand: 0, available: 0, locations: [] }
    return item
  }
}
