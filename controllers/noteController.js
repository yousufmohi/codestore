// USING ASYNC HANDLER for the try catch for promises with async
const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getNotes = asyncHandler(async (req,res) => {
    res.json({
        message: "Get Notes"
    });
});

// @desc Create Goal
// @route POST /api/goals
// @access Private
const setNote = asyncHandler(async (req,res) => {
    console.log(req.body); 
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.json({
        message: "Set Note"
    });
});

// @desc Update Goal
// @route PUT /api/goals/id:
// @access Private
const updateNote = asyncHandler(async (req,res) => {
    res.json({
        message: `Update Note ${req.params.id}`
    });
});

// @desc Delete Goal
// @route DELETE /api/goals/id:
// @access Private
const deleteNote = asyncHandler(async (req,res) => {
    res.json({
        message: `Delete Note ${req.params.id}`
    });
});
// exporting the functions
module.exports = {getNotes, setNote, updateNote, deleteNote};