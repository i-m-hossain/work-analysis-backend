const mongoose = require('mongoose')
const WorkerSchema = new mongoose.Schema({
    worker_count: {
        type: Number
    },
    datetime: {
        year: Number, 
        month:Number, 
        day: Number,
        hour: Number
    }
})
module.exports = mongoose.model.hourly_worker_count || mongoose.model("hourly_worker_count", WorkerSchema, "hourly_worker_count");