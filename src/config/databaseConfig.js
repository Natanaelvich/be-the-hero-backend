export default {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '12345',
    database: 'hero',
  },
  migrations: {
    tableName: 'migrations',
    directory: '../database/migrations',
  },
};
