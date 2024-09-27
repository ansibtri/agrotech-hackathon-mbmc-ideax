require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { connect } = require("./Database.js");
const Auth = require("./routes/Auth");
connect()

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use('/api/auth', Auth); // setting up routes

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
