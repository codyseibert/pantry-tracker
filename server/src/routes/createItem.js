const mongoose = require("mongoose");

module.exports = async (req, res) => {
  const item = req.body;
  const ItemModel = mongoose.model("Item");
  const myItem = new ItemModel(item);
  const createdItem = await myItem.save();
  res.json(createdItem);
};
