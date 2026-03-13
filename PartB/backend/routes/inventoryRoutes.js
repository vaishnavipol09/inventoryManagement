const express = require("express");
const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");

const router = express.Router();

router.post("/", async (req, res) => {
  const { supplier_id, product_name, quantity, price } = req.body;

  const supplier = await Supplier.findById(supplier_id);

  if (!supplier) {
    return res.status(400).json({ message: "Invalid supplier" });
  }

  const inventory = new Inventory({
    supplier_id,
    product_name,
    quantity,
    price
  });

  const saved = await inventory.save();

  res.json(saved);
});

router.get("/", async (req, res) => {

  const result = await Inventory.aggregate([
    {
      $lookup: {
        from: "suppliers",
        localField: "supplier_id",
        foreignField: "_id",
        as: "supplier"
      }
    },
    { $unwind: "$supplier" },
    {
      $group: {
        _id: "$supplier.name",
        totalValue: {
          $sum: { $multiply: ["$quantity", "$price"] }
        },
        items: { $push: "$product_name" }
      }
    },
    { $sort: { totalValue: -1 } }
  ]);

  res.json(result);
});

module.exports = router;