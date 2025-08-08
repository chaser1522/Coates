import { Controller, Get, Query } from '@nestjs/common'
import fixtures from '../data/fixtures.json'

@Controller('parts')
export class PartsController {
  @Get('lookup')
  lookup(@Query('serial') serial?: string) {
    const results = serial ? (fixtures as any).serialIndex[serial] || [] : []
    // Stub: if multiple matches, frontend should ask clarifying questions
    return { serial, results }
  }
}
