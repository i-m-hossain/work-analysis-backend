const express = require("express");
const { handleLogin, handleRegister } = require("../controller/authController");


// authRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /employee.
const authRoutes = express.Router();

//  create a new record.
authRoutes.route("/register").post(handleRegister);
authRoutes.route("/login").post(handleLogin);


module.exports = authRoutes;
