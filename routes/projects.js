import express from "express";
import { createProject } from "../model/projects/projects";
const router = express.Router();

/* GET all projects listing. */
router.get("/", function (req, res) {
  const body = await getAllProjects();
  res.json({ 
    sucess: true,
    message: body });
});


/* GET user by id. */
router.get("/:project_id", function (req, res) {
  //get user_id by params from the req
  const project_id = Number(req.params.project_id)
  const result = await getProjectById(project_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST a new project. */
router.post("/", function (req, res) {
  //get body info from req.body
  const body = req.body;
  const result = await createProject(body);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE project by id. */
router.delete("/:project_id", function (req, res) {
  //get project_id by params from the req
  const project_id = Number(req.params.project_id);
  const result = await deleteProjectById(project_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* GET all projects listing. */
router.put("/", function (req, res) {
  const body = req.body;
  const result = await updateProject(body);
  res.json({ 
    sucess: true,
    message: result });
});

export default router;
