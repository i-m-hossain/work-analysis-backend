const express = require("express");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    },
});
const upload = multer({ storage: storage });
//get all controllers functions routes
const { handleUploadData,handleWorkerCount } = require("../controller/workAnalysisController");

// workAnalysisRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests.
const workAnalysisRoutes = express.Router();

//  create a new record.
workAnalysisRoutes.post("/upload-data", upload.single("file"), handleUploadData);
workAnalysisRoutes.get("/worker", upload.single("file"), handleWorkerCount);

module.exports = workAnalysisRoutes;
