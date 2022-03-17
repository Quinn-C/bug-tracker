//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//USER INFO: user_id, full_name, team_id

//GET ALL
export async function getAllUsers(){
    const res = await query(`SELET * FROM users;`);
    return res.rows;
}

//GET USER BY ID
export async function getUserById(id){
    const res = await query(`SELET * FROM users WHERE user_id = $1;`, [id]);
    return res.rows;
}

//CREATE USER
export async function createUser(body){
    const user_id = body.user_id;
    const full_name = body.full_name;
    const email = body.email;
    const phone = body.phone;
    const res = await query(`INSERT INTO users(user_id, full_name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *;`, [user_id, full_name, email, phone]);
    return res.rows;
}


//DELETE USER BY ID
export async function deleteUserById(id){
    const res = await query(`DELETE FROM users WHERE user_id = $1;`, [id]);
    return res.rows;
}

//UPDATE USER INFO
export async function updateUser(body){
    const user_id = body.user_id;
    const full_name = body.full_name;
    const email = body.email;
    const phone = body.phone;
    const res = await query(`UPDATE users SET full_name = $1, email = $2, phone = $3 WHERE user_id = $4 RETURNING *`, [full_name, email, phone, user_id]);
    return res.rows;
}