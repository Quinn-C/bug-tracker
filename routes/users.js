import express from "express";
import { getAllUsers, getUserById, createUser, deleteUserById, updateUser} from "../model/users/users.js";
import {getRelationshipsByUserId, createRelationship, deleteRelationshipByTwoIds} from "../model/relationships/relationships.js";

const router = express.Router();

/* GET all users listing. */
router.get("/", async function (req, res) {
  const body = await getAllUsers();
  res.json({ 
    sucess: true,
    message: body });
});


/* GET user by id. */
router.get("/:user_id", async function (req, res) {
  //get user_id by params from the req
  const user_id = Number(req.params.user_id)
  const result = await getUserById(user_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST a new user. */
router.post("/", async function (req, res) {
  //get body info from req.body
  const body = req.body;
  const result = await createUser(body);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE user by id. */
router.delete("/:user_id", async function (req, res) {
  //get user_id by params from the req
  const user_id = Number(req.params.user_id)
  const result = await deleteUserById(user_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* UPDATE user. */
router.put("/", async function (req, res) {
  const body = req.body;
  const result = await updateUser(body);
  res.json({ 
    sucess: true,
    message: result });
});

/* GET relationship - all projects for one user. */
router.get("/:user_id/projects", async function (req, res) {
  //get user_id by params from the req
  const user_id = Number(req.params.user_id)
  const result = await getRelationshipsByUserId(user_id);
  res.json({ 
    sucess: true,
    message: result });
});

/* POST relationship - add a project for a user. */
router.post("/:user_id/:project_id", async function (req, res) {
  //get body info from req.body
  const project_id = Number(req.params.project_id);
  const user_id = Number(req.params.user_id)
  const result = await createRelationship(project_id, user_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE relationship - delete a user from a project. */
router.delete("/:user_id/:project_id", async function (req, res) {
  //get project_id by params from the req
  const project_id = Number(req.params.project_id);
  const user_id = Number(req.params.user_id)
  const result = await deleteRelationshipByTwoIds(project_id, user_id);
  res.json({ 
    sucess: true,
    message: result});
});

export default router;
