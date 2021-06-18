const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("./models/Item");

app.use(cors());
app.use(express.json());

app.post("/items", require("./routes/createItem"));

mongoose
  .connect("mongodb://localhost/pantry-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("server hosted on port 5000");
    });
  });
