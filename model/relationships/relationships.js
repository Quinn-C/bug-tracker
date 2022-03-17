//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//USER_PROJECT RELATIOSHIP INFO: user_id, project_id
//GET ALL
export async function getAllRelationships(){
    const res = await query(`SELET * FROM user_project;`);
    return res.rows;
}

//GET RELATIONSHIP BY USER ID
export async function getRelationshipByUserId(id){
    const res = await query(`SELET * FROM user_project WHERE user_id = $1;`, [id]);
    return res.rows;
}

//GET RELATIONSHIP BY PROJECT ID
export async function getRelationshipByProjectId(id){
    const res = await query(`SELET * FROM user_project WHERE project_id = $1;`, [id]);
    return res.rows;
}

//CREATE RELATIONSHIP
export async function createRelationship(body){
    user_id = body.user_id;
    project_id = body.project_id;
    const res = await query(`INSERT INTO user_project(user_id, project_id) VALUES ($1, $2) RETURNING *;`, [user_id, project_id]);
    return res.rows;
}


//DELETE RELATIONSHIP BY USER ID
export async function deleteRelationshipByUserId(id){
    const res = await query(`DELETE FROM user_project WHERE user_id = $1;`, [id]);
    return res.rows;
}

//DELETE RELATIONSHIP BY PROJECT ID
export async function deleteRelationshipByProjectId(id){
    const res = await query(`DELETE FROM user_project WHERE project_id = $1;`, [id]);
    return res.rows;
}

//UPDATE RELATIONSHIP INFO BY USER ID
export async function updateRelationshipByUserId(body){
    user_id = body.user_id;
    project_id = body.project_id;
    const res = await query(`UPDATE user_project SET project_id = $1 WHERE user_id = $2,  RETURNING *`, [project_id, user_id]);
    return res.rows;
}

//UPDATE RELATIONSHIP INFO BY PROJECT ID
export async function updateRelationshipByProjectId(body){
    user_id = body.user_id;
    project_id = body.project_id;
    const res = await query(`UPDATE user_project SET user_id = $1 WHERE project_id = $2,  RETURNING *`, [user_id, project_id]);
    return res.rows;
}