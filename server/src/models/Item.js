const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema({
  item: String,
  quantity: Number,
});

mongoose.model("Item", Item);
