import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('users', table => {
  table.increments('id').primary();
  table.string('email').notNullable().unique()
  table.string('password').notNullable();
  table.string('first_name').nullable();
  table.string('last_name').nullable();
  table.string('phone').nullable();
  table.enu('role', ['admin', 'user']);
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());

  knex.schema.createTy
});
}


export async function down(knex: Knex): Promise<void> {
 return knex.schema.dropTable('users');
}

