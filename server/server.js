/*
* @desc server setup and structure
*/
// imports for express and other resources used
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const cors = require('cors');
const connectDB = require('./config/db');
// PORT number from .env file, set to port 5000 if null
const PORT = process.env.PORT || 5000;
// connecting to the db
connectDB();
// initializing app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
// importing the routes for CRUD operations
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// overwrites default express error handler
app.use(errorHandler);
// starting server
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
