//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//PROJECT INFO: project_id, project_name 

//GET ALL
export async function getAllProjects(){
    const res = await query(`SELET * FROM projects;`);
    return res.rows;
}

//GET PROJECT BY ID
export async function getProjectById(id){
    const res = await query(`SELET * FROM projects WHERE project_id = $1;`, [id]);
    return res.rows;
}

//CREATE PROJECT
export async function createProject(body){
    project_name = body.project_name;
    const res = await query(`INSERT INTO projects(project_name) VALUES ($1) RETURNING *;`, [team_name]);
    return res.rows;
}


//DELETE PROJECT BY ID
export async function deleteProjectById(id){
    const res = await query(`DELETE FROM projects WHERE project_id = $1;`, [id]);
    return res.rows;
}

//UPDATE PROJECT INFO
export async function updateProject(body){
    project_id = body.project_id;
    project_name = body.project_name;
    const res = await query(`UPDATE projects SET project_name = $1 WHERE project_id = $2,  RETURNING *`, [project_name, project_id]);
    return res.rows;
}