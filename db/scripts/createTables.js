//add sql string from dbdiagram in file .sql and save them as string in back tick inside a variable called createtablestring
//import query function and create a function to make query to the database server

import {query} from '../connections.js';

const createTablesSqlString =
    `CREATE TABLE IF NOT EXISTS users (
        user_id int PRIMARY KEY,
        full_name varchar(255),
        email varchar(255),
        phone varchar(255),
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS projects (
        project_id SERIAL PRIMARY KEY,
        project_name varchar(255),
        description varchar(255),
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS tickets (
        ticket_id SERIAL PRIMARY KEY,
        ticket_name varchar(255),
        description varchar(255),
        project_id int,
        ticket_author varchar(255),
        user_id int,
        status varchar(255),
        type varchar(255),
        priority varchar(255),
        estimate_hours int,
        due_date date,
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS relationships (
        id SERIAL PRIMARY KEY,
        project_id int,
        user_id int
      );
      
      ALTER TABLE tickets ADD FOREIGN KEY (project_id) REFERENCES projects (project_id);
      
      ALTER TABLE tickets ADD FOREIGN KEY (user_id) REFERENCES users (user_id);
    
      ALTER TABLE relationships ADD FOREIGN KEY (user_id) REFERENCES users (user_id);
      
      ALTER TABLE relationships ADD FOREIGN KEY (project_id) REFERENCES projects (project_id);`;
      

async function createTables(){
    const res = await query(createTablesSqlString);
    console.log('Create new tables', res); //what response will get?
}

createTables()