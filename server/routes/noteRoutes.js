/*
* @desc Routes for the CRUD operations
*/
const express = require("express");
const router = express.Router();
const {getNotes, setNote, updateNote, deleteNote} = require('../controllers/noteController');
const {protect} = require('../middleware/authMiddleware');
// GET request 
router.get('/',protect, getNotes);
// POST REQUEST
router.post('/', protect, setNote);
// PUT REQUEST
router.put('/:id',protect, updateNote);
// DELETE REQUEST
router.delete('/:id',protect, deleteNote);
// exporting the router
module.exports = router; 