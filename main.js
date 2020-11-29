/**
 * C:\Users\johnc\workspace5\NonasKitchen\main.js
 */

// **** the code should be executed in "strict mode" ****
"use strict";

// **** ****
const express = require("express");

// **** required controllers ****
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

// **** ****
const layouts = require("express-ejs-layouts");

// **** instantiate the express application ****
const app = express();

// **** set application to use EJS ****
app.set("view engine", "ejs");

// **** port to listen on ****
app.set("port", process.env.PORT || 3000);

// **** tell express to use body-parser to process url-encoded parameters ****
app.use(
    express.urlencoded({
        extended: false
    })
);

// **** tell express to use JSON parameters ****
app.use(express.json());

// **** set application to use the layout module ****
app.use(layouts);

// **** serve directly individual assets from the specified folder ****
app.use(express.static("public"));

// **** route for home page ****
app.get("/", (req, res) => {
    res.render("index");
});

// **** routes ****
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// **** ****
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// **** start application listening on the specified port ****
app.listen(app.get("port"), () => {

    // **** log that the server is up and running ****
    console.log(`<<< server running on: http://localhost:${app.get("port")}`);
});