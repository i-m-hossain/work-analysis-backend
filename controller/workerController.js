const Worker = require("../model/workerModel");
exports.handelWorkerCount = async function (req, res) {
    try {
        const workers = await Worker.find()
        res.status(200).json({message: "users found", workers})
    } catch (error) {
        res.status(500).json({message: 'failed to fetch', error})
    }
}