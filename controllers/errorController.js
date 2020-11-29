/**
 * C:\Users\johnc\workspace5\NonasKitchen\errorController.js
 */

// **** the code should be executed in "strict mode" ****
"use strict";

// **** ****
const httpStatus = require("http-status-codes");

// **** handle requests not previously handled ****
exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

// **** handle internal errors ****
exports.internalServerError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};
