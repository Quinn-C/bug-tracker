import express from "express";
import { getAllProjects, getProjectById, createProject, deleteProjectById, updateProject} from "../model/projects/projects.js";
import {getRelationshipsByProjectId, createRelationship, deleteRelationshipByTwoIds} from "../model/relationships/relationships.js";

const router = express.Router();

/* GET all projects listing. */
router.get("/", async function (req, res) {
  const body = await getAllProjects();
  res.json({ 
    sucess: true,
    message: body });
});


/* GET project by id. */
router.get("/:project_id", async function (req, res) {
  //get user_id by params from the req
  const project_id = Number(req.params.project_id)
  const result = await getProjectById(project_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST a new project. */
router.post("/", async function (req, res) {
  //get body info from req.body
  const body = req.body;
  const result = await createProject(body);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE project by id. */
router.delete("/:project_id", async function (req, res) {
  //get project_id by params from the req
  const project_id = Number(req.params.project_id);
  const result = await deleteProjectById(project_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* Update project */
router.put("/", async function (req, res) {
  const body = req.body;
  const result = await updateProject(body);
  res.json({ 
    sucess: true,
    message: result });
});


/* GET relationships - one projects get all its users. */
router.get("/:project_id/users", async function (req, res) {
  //get user_id by params from the req
  const project_id = Number(req.params.project_id)
  const result = await getRelationshipsByProjectId(project_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST relationship - add a user in a project. */
router.post("/:project_id/:user_id", async function (req, res) {
  //get body info from req.body
  const project_id = Number(req.params.project_id);
  const user_id = Number(req.params.user_id)
  const result = await createRelationship(project_id, user_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE relationship - delete a user from a project. */
router.delete("/:project_id/:user_id", async function (req, res) {
  //get project_id by params from the req
  const project_id = Number(req.params.project_id);
  const user_id = Number(req.params.user_id);
  const result = await deleteRelationshipByTwoIds(project_id, user_id);
  res.json({ 
    sucess: true,
    message: result});
});

export default router;
