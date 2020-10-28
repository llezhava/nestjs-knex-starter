import { Module, DynamicModule, Global } from '@nestjs/common';
import { KnexOptions } from './types';
import { KNEX_OPTIONS } from './constants';
import { KnexService } from './knex.service';

@Global()
@Module({
  providers: [KnexService]
})
export class KnexModule {
  static register(options: KnexOptions): DynamicModule {
    return {
      module: KnexModule,
      providers: [
        {
          provide: KNEX_OPTIONS,
          useValue: options,
        },
        KnexService
      ],
      exports: [KnexService]
    };
  }
}
