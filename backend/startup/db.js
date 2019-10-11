const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function() {
    const uri = process.env.MONGO_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false  });

    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDB successfully connected");
    });
};

