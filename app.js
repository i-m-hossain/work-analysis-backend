const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const adminAuth = require("./middleware/adminAuth");
const app = express();
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

// execute database connection
dbConnect();

app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});
// admin endpoint
app.get("/admin-endpoint", adminAuth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});
//routes
app.use(require("./routes/authRoutes"));

//server start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
