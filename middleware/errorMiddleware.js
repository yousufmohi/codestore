/*
* @desc error handler for the middleware
*/
// middlware = functions that execute during request-response
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);
    // displaying an error message and the stack trace, displaying null if project is in production
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
// exporting the error handler
module.exports = {
    errorHandler
};