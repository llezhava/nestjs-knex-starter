import { PgConnectionConfig } from "knex";

export type KnexOptions = {
 client: string,
 version: string,
 connection: PgConnectionConfig
}