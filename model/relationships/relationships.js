//import query so postgresql client can talk to postgresql server
import {query} from '../../db/connections.js';

//USER_PROJECT RELATIOSHIP INFO: user_id, project_id
//GET ALL
export async function getAllRelationships(){
    const res = await query(`SELECT * FROM relationships;`);
    return res.rows;
}

//GET RELATIONSHIP BY USER ID
export async function getRelationshipsByUserId(id){
    const res = await query(`SELECT * FROM relationships WHERE user_id = $1;`, [id]);
    return res.rows;
}

//GET RELATIONSHIP BY PROJECT ID
export async function getRelationshipsByProjectId(id){
    const res = await query(`SELECT * FROM relationships WHERE project_id = $1;`, [id]);
    return res.rows;
}

//CREATE RELATIONSHIP
export async function createRelationship(project_id, user_id){
    const res = await query(`INSERT INTO relationships(project_id, user_id) VALUES ($1, $2) RETURNING *;`, [project_id, user_id]);
    return res.rows;
}


//DELETE RELATIONSHIP BY TWO IDs
export async function deleteRelationshipByTwoIds(project_id, user_id){
    const res = await query(`DELETE FROM relationships WHERE project_id = $1 AND user_id = $2;`, [project_id, user_id]);
    return res.rows;
}


// //UPDATE RELATIONSHIP INFO BY TWO IDs
// export async function updateRelationshipByProjectId(project_id, user_id){
//     const res = await query(`UPDATE relationships SET project_id = $1 WHERE user_id = $2 RETURNING *`, [project_id, user_id]);
//     return res.rows;
// }

// //UPDATE RELATIONSHIP INFO BY PROJECT ID
// export async function updateRelationshipByProjectId(body){
//     user_id = body.user_id;
//     project_id = body.project_id;
//     const res = await query(`UPDATE user_project SET project_id = $1, user_id = $2 RETURNING *`, [project_id, user_id]);
//     return res.rows;
// }