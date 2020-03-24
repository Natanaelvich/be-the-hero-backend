import knex from 'knex';
import configDatabse from '../../knexfile';

const connection = knex(configDatabse.development);

export default connection;
