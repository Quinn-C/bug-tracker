import express from "express";
import {getAllTickets, getTicketById, createTicket, deleteTicketById, updateTicket} from '../model/tickets/tickets.js';

const router = express.Router();

/* GET all tickets listing. */
router.get("/", function (req, res) {
  const body = await getAllTickets();
  res.json({ 
    sucess: true,
    message: body });
});


/* GET ticket by id. */
router.get("/:ticket_id", function (req, res) {
  //get user_id by params from the req
  const ticket_id = Number(req.params.ticket_id)
  const result = await getTicketById(ticket_id);
  res.json({ 
    sucess: true,
    message: result });
});


/* POST a new ticket. */
router.post("/", function (req, res) {
  //get body info from req.body
  const body = req.body;
  const result = await createTicket(body);
  res.json({ 
    sucess: true,
    message: result});
});


/* DELETE project by id. */
router.delete("/:ticket_id", function (req, res) {
  //get ticket_id by params from the req
  const ticket_id = Number(req.params.ticket_id);
  const result = await deleteTicketById(ticket_id);
  res.json({ 
    sucess: true,
    message: result});
});


/* UPDATE tickets listing. */
router.put("/", function (req, res) {
  const body = req.body;
  const result = await updateTicket(body);
  res.json({ 
    sucess: true,
    message: result });
});

export default router;
