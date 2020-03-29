import knex from 'knex';
import configDatabse from '../../knexfile';

const config =
  process.env.NODE_ENV === 'test'
    ? configDatabse.test
    : configDatabse.development;

const connection = knex(config);

export default connection;
