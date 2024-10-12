// USING ASYNC HANDLER for the try catch for promises with async
const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.json({
        message: "Get Goals"
    });
});

// @desc Create Goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res) => {
    console.log(req.body); 
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.json({
        message: "Set Goal"
    });
});

// @desc Update Goal
// @route PUT /api/goals/id:
// @access Private
const updateGoal = asyncHandler(async (req,res) => {
    res.json({
        message: `Update Goal ${req.params.id}`
    });
});

// @desc Delete Goal
// @route DELETE /api/goals/id:
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.json({
        message: `Delete Goal ${req.params.id}`
    });
});
// exporting the functions
module.exports = {getGoals, setGoal, updateGoal, deleteGoal};