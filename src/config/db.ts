import config = require("config");
import { PgConnectionConfig } from "knex";

const dbconfig: any = config.get('db');

const conf: PgConnectionConfig = {
  host: dbconfig.host,
  port: dbconfig.port,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database
}

export default conf;
