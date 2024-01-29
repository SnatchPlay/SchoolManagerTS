
// const config = require("knex")({
//   client: 'pg', // This is the required 'client' option
//   connection: {
//     host: "127.0.0.1",
//     port: 5432,
//     user: "postgres",
//     password: "admin",
//     database: "SchoolManager",
//   },
// });

// export default config;
import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg', // This is the required 'client' option
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'SchoolManager',
  },
};

export default config;