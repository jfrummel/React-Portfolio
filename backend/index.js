const express = require("express");
const app = express();
require("express-async-errors");

require("./startup/routes")(app);
require("./startup/db")();


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`API running on port ${port}`)
});