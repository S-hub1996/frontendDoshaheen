const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://localhost:27017/authenticate")

//export mongodb database from here and import in index.js