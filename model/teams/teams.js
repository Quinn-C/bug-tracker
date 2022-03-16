//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//USER INFO: team_id, team_name 

//GET ALL
export async function getAllTeams(){
    const res = await query(`SELET * FROM teams;`);
    return res.rows;
}

//GET TEAM BY ID
export async function getTeamById(id){
    const res = await query(`SELET * FROM teams WHERE team_id = $1;`, [id]);
    return res.rows;
}

//CREATE TEAM
export async function createTeam(body){
    team_name = body.team_name;
    const res = await query(`INSERT INTO teams(team_name) VALUES ($1) RETURNING *;`, [team_name]);
    return res.rows;
}


//DELETE TEAM BY ID
export async function deleteTeamById(id){
    const res = await query(`DELETE FROM teams WHERE team_id = $1;`, [id]);
    return res.rows;
}

//UPDATE TEAM INFO
export async function updateTeam(body){
    team_id = body.team_id;
    team_name = body.team_name;
    const res = await query(`UPDATE teams SET team_name = $1 WHERE team_id = $2,  RETURNING *`, [team_name, team_id]);
    return res.rows;
}