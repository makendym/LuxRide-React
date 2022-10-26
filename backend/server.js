
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB databse connection established successfully");
});

const ridersRouter = require('./routes/riders');
const ridersSignup = require('./routes/ridersSignUp');




app.use('/riders', ridersRouter);
app.use('/ridersSignUp',ridersSignup)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
