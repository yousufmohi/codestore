/*
* @desc Controller for the notes data transfers
*/
// USING ASYNC HANDLER for the try catch for promises with async
const asyncHandler = require('express-async-handler');
// importing the Note model
const Note = require('../models/noteModel')
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getNotes = asyncHandler(async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
});

// @desc Create Goal
// @route POST /api/goals
// @access Private
const setNote = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const note = await Note.create({
        text: req.body.text
    });
    res.json(note);
});

// @desc Update Goal
// @route PUT /api/goals/id:
// @access Private
const updateNote = asyncHandler(async (req,res) => {

    const note = await Note.findById(req.params.id);
    if(!note) {
        res.status(400);
        throw new Error('Note not found');
    }
    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updateNote);

});

// @desc Delete Goal
// @route DELETE /api/goals/id:
// @access Private
const deleteNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);
    if(!note) {
        res.status(400);
        throw new Error('Note not found');
    }
    // remove is deprecated for mongodb, use deleteOne
    await Note.deleteOne(note);
    res.json({id: req.params.id});
});
// exporting the functions
module.exports = {getNotes, setNote, updateNote, deleteNote};