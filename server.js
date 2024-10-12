/*
* @desc server starts
*/
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/api/goals", require("./routes/goalRoutes"));
// overwrites default express error handler
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
