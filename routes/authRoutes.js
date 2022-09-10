const express = require("express");
const { handleLogin, handleRegister, handleFetchUsers, handelDeleteUser } = require("../controller/authController");
const adminAuth = require("../middleware/adminAuth");


// authRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests
const authRoutes = express.Router();

//  create a new record.
authRoutes.route("/register").post(handleRegister);
authRoutes.route("/login").post(handleLogin);
authRoutes.get("/fetchUsers", adminAuth, handleFetchUsers)
authRoutes.delete('/deleteUser/:id', adminAuth, handelDeleteUser)


module.exports = authRoutes;
