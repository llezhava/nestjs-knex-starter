import { Injectable, Inject } from '@nestjs/common';
import { KNEX_OPTIONS } from './constants';
import Knex from 'knex';

@Injectable()
export class KnexService {
  private _knexConnection: Knex;

  constructor(@Inject(KNEX_OPTIONS) private options) {
    if (!this._knexConnection) {
      console.log('KNEX INITIATED');
      this._knexConnection = Knex(this.options);
    }
  }

  get knex() {
    return this._knexConnection;
  }
}
