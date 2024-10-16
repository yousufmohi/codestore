/*
* @desc Controller for the notes data transfers
*/
// USING ASYNC HANDLER for the try catch for promises with async
const asyncHandler = require('express-async-handler');
// importing the Note and user models
const Note = require('../models/noteModel');
const User = require('../models/userModel');
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getNotes = asyncHandler(async (req,res) => {
    const notes = await Note.find({user: req.user.id});
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
        text: req.body.text,
        user: req.user.id
    });
    res.json(note);
});

// @desc Update Goal
// @route PUT /api/goals/id:
// @access Private
const updateNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(!note) {
        res.status(401);
        throw new Error('Note not found');
    }
    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(note.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updateNote);

});

// @desc Delete Goal
// @route DELETE /api/goals/id:
// @access Private
const deleteNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if(!note) {
        res.status(401);
        throw new Error('Note not found');
    }
    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(note.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    // remove is deprecated for mongodb, use deleteOne
    await Note.deleteOne(note);
    res.json({id: req.params.id});
});
// exporting the functions
module.exports = {getNotes, setNote, updateNote, deleteNote};