import { Injectable } from '@nestjs/common';

import { KnexService } from '@db/knex.service';
import { UserRegisterDto } from './dto/userData.dto';
import { UserDb, User } from './types';
import { toCamelcase, toSnakeCase } from '@src/common/utils';

@Injectable()
export class UserDatabaseService {
  constructor(private db: KnexService) {}

  async signup(data: UserRegisterDto): Promise<User> {
    const result = await this.db
      .knex('users')
      .insert({ email: data.email, password: data.password })
      .returning('*');

    return toCamelcase<User>(result[0]);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.db.knex('users').where({ email });
    return toCamelcase<User>(user[0]);
  }

  async findById(id: number): Promise<User> {
    const user = await this.db.knex('users').where({ id });
    return toCamelcase<User>(user[0]);
  }

  async updateUser(userEmail, userData): Promise<User> {
    const result = await this.db
      .knex('users')
      .where('email', userEmail)
      .update(toSnakeCase<UserDb>(userData))
      .returning('*');
    return toCamelcase(result[0]);
  }
}
