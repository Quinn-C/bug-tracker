//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//TICKET INFO: ticket_name varchar(255), project_id int, author varchar(255), description varchar(255), status varchar(255), priority varchar(255), type varchar(255), time_of_estimate int (HOURS), assigned_dev int, due_date date,

//GET ALL
export async function getAllTickets(){
    const res = await query(`SELET * FROM tickets;`);
    return res.rows;
}

//GET TICKET BY ID
export async function getTicketById(id){
    const res = await query(`SELET * FROM tickets WHERE ticket_id = $1;`, [id]);
    return res.rows;
}

//CREATE TICKET
export async function createTicket(body){
    ticket_name = body.ticket_name;
    description = body.description;
    project_id = body.project_id;
    ticket_author = body.ticket_author;
    user_id = body.user_id;
    ticket_status = body.status;
    type = body.type;
    priority = body.priority;
    estimate_hours = body.estimate_hours;
    due_date = body.due_date;

    const res = await query(`INSERT INTO tickets(ticket_name, description, project_id, ticket_author, user_id, status, type, priority, estimate_hour, due_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`, [ticket_name, description, project_id, ticket_author, user_id, ticket_status, type, priority, estimate_hour, due_date]);
    return res.rows;
}


//DELETE TICKET BY ID
export async function deleteTicketById(id){
    const res = await query(`DELETE FROM tickets WHERE ticket_id = $1;`, [id]);
    return res.rows;
}

//UPDATE TICKET INFO
export async function updateTicket(body){
    ticket_id = body.ticket_id;
    ticket_name = body.ticket_name;
    description = body.description;
    project_id = body.project_id;
    ticket_author = body.ticket_author;
    user_id = body.user_id;
    ticket_status = body.status;
    type = body.type;
    priority = body.priority;
    estimate_hours = body.estimate_hours;
    due_date = body.due_date;
    const res = await query(`UPDATE tickets SET ticket_name = $1, description = $2, project_id = $3, ticket_author = $4, user_id = $5, status = $6, type = $7, priority = $8, estimate_hour = $9, due_date = $10 WHERE ticket_id = $11, RETURNING *`, [ticket_name, description, project_id, ticket_author, user_id, ticket_status, type, priority, estimate_hour, due_date, ticket_id]);
    return res.rows;
}