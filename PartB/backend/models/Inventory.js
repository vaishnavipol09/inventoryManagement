const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  supplier_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier"
  },
  product_name: String,
  quantity: {
    type: Number,
    min: 0
  },
  price: {
    type: Number,
    min: 1
  }
});

module.exports = mongoose.model("Inventory", InventorySchema);