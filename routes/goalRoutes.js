/*
* @desc Routes for the CRUD operations
*/

const express = require("express");
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');
// GET request 
router.get('/',getGoals);
// POST REQUEST
router.post('/',setGoal);
// PUT REQUEST
router.put('/:id',updateGoal);
// DELETE REQUEST
router.delete('/:id',deleteGoal);
// exporting the router
module.exports = router; 