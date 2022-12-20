const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb+srv://ShubhamVerma:ShubhamVerma@cluster0.b4a62ne.mongodb.net/database?retryWrites=true&w=majority")

//export mongodb database from here and import in index.js