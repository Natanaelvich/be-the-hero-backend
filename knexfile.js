// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345',
      database: 'hero',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'src/database/migrations',
    },
  },
  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345',
      database: 'hero_test',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'src/database/migrations',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345',
      database: 'hero',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'src/database/migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345',
      database: 'hero',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'src/database/migrations',
    },
  },
};
