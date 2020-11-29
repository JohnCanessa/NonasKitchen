/**
 * C:\Users\johnc\workspace5\NonasKitchen\homeController.js
 */

// **** the code should be executed in "strict mode" ****
"use strict";

// **** courses ****
var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

// **** callback function for courses ****
exports.showCourses = (req, res) => {
    res.render("courses", {

        // **** pass the courses array to the view ****
        offeredCourses: courses
    });
};

// **** callback function for contact page ****
exports.showSignUp = (req, res) => {

    // **** ****
    res.render("contact");
};

// **** callback function after submitting sign up form ****
exports.postedSignUpForm = (req, res) => {

    // **** ****
    res.render("thanks");
};
