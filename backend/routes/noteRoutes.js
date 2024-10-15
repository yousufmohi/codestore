/*
* @desc Routes for the CRUD operations
*/

const express = require("express");
const router = express.Router();
const {getNotes, setNote, updateNote, deleteNote} = require('../controllers/noteController');
// GET request 
router.get('/',getNotes);
// POST REQUEST
router.post('/',setNote);
// PUT REQUEST
router.put('/:id',updateNote);
// DELETE REQUEST
router.delete('/:id',deleteNote);
// exporting the router
module.exports = router; 