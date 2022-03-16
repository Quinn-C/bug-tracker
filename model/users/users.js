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
    user_id = body.user_id;
    full_name = body.full_name;
    team_id = body.team_id;
    const res = await query(`INSERT INTO users(user_id, full_name,team_id) VALUES ($1, $2) ON CONFLICT (user_id) DO NOTHING RETURNING *;`, [user_id, full_name,team_id]);
    return res.rows;
}


//DELETE USER BY ID
export async function deleteUserById(id){
    const res = await query(`DELETE FROM users WHERE user_id = $1;`, [id]);
    return res.rows;
}

//UPDATE USER INFO
export async function updateUser(body){
    user_id = body.user_id;
    full_name = body.full_name;
    team_id = body.team_id;
    const res = await query(`UPDATE users SET full_name = $1, team_id = $2 WHERE user_id = $3 RETURNING *`, [full_name, team_id, user_id]);
    return res.rows;
}