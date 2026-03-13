const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  name: String,
  city: String
});

module.exports = mongoose.model("Supplier", SupplierSchema);