'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  
  connection: Env.get('DB_CONNECTION', 'mysql2'),

  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  },

  mysql2: {
    client: 'mysql2',
    connection: {
      host: Env.get('DB_HOST'),
      port: Env.get('DB_PORT'),
      user: Env.get('DB_USERNAME'),
      password: Env.get('DB_PASSWORD'),
      database: Env.get('DB_DATABASE')
    },
    debug: Env.get('DB_DEBUG', false)
  },

  pg: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
