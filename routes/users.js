import express from "express";
import { getAllUsers, getUserById, createUser, deleteUserById, updateUser } from "../model/users/users";
const router = express.Router();

/* GET all users listing. */
router.get("/", function (req, res) {
  const body = await getAllUsers();
  res.json({ 
    sucess: true,
    message: body });
});


/* GET user by id. */
router.get("/:user_id", function (req, res) {
  //get user_id by params from the req
  const user_id = Number(req.params.user_id)
  const result = await getUserById(user_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST a new user. */
router.post("/", function (req, res) {
  //get body info from req.body
  const body = req.body;
  const result = await createUser(body);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE user by id. */
router.delete("/:user_id", function (req, res) {
  //get user_id by params from the req
  const user_id = Number(req.params.user_id)
  const result = await deleteUserById(user_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* GET all users listing. */
router.put("/", function (req, res) {
  const body = req.body;
  const result = await updateUser(body);
  res.json({ 
    sucess: true,
    message: result });
});

export default router;
