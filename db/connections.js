//using nodes-pg as PostgreSQL client for Node.js to connect to PostgreSQL server.
//set up connection to postgresql server
//pool will use the environment variables to connect node.js to PostgreSQL server.

import pg from 'pg'
import {db} from '../config.js'
const pool = new pg.Pool({
    connectionString : db.database_uri,
    ssl: {rejectUnauthorized: false}
  })

export function query(text, params){
    return pool.query(text, params)
}