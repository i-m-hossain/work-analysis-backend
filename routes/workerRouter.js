const express = require("express");
const { handelWorkerCount } = require("../controller/workerController");
const workerRoutes = express.Router();

workerRoutes.route("/worker-count").get(handelWorkerCount);

module.exports = workerRoutes;
