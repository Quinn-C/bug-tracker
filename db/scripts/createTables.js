//add sql string from dbdiagram in file .sql and save them as string in back tick inside a variable called createtablestring
//import query function and create a function to make query to the database server

import {query} from '../connections.js';

const createTablesSqlString =
    `CREATE TABLE IF NOT EXISTS teams (
        team_id SERIAL PRIMARY KEY,
        team_name varchar(255),
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS users (
        user_id int PRIMARY KEY,
        full_name varchar(255),
        created_at timestamp not null default CURRENT_TIMESTAMP,
        team_id int
      );
      
      CREATE TABLE IF NOT EXISTS projects (
        project_id SERIAL PRIMARY KEY,
        project_name varchar(255),
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS tickets (
        ticket_id SERIAL PRIMARY KEY,
        ticket_name varchar(255),
        project_id int,
        author varchar(255),
        description varchar(255),
        status varchar(255),
        priority varchar(255),
        type varchar(255),
        time_of_estimate int,
        assigned_dev int,
        due_date date,
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS user_project (
        id SERIAL PRIMARY KEY,
        user_id int,
        project_id int
      );
      
      ALTER TABLE users ADD FOREIGN KEY (team_id) REFERENCES teams (team_id);
      
      ALTER TABLE tickets ADD FOREIGN KEY (project_id) REFERENCES projects (project_id);
      
      ALTER TABLE tickets ADD FOREIGN KEY (assigned_dev) REFERENCES users (user_id);
    
      ALTER TABLE user_project ADD FOREIGN KEY (user_id) REFERENCES users (user_id);
      
      ALTER TABLE user_project ADD FOREIGN KEY (project_id) REFERENCES projects (project_id);`;
      

async function createTables(){
    const res = await query(createTablesSqlString);
    console.log('Create new tables', res); //what response will get?
}

createTables()