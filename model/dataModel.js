const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    entry: {
        type: Number,
    },
    exit:{
        type: Number,
    },
    datetime: {
        type: Date,
    }
})
module.exports = mongoose.model.dump_collection || mongoose.model("dump_collection", DataSchema);