const express = require("express");
const Supplier = require("../models/Supplier");

const router = express.Router();

router.post("/", async (req, res) => {
  const supplier = new Supplier(req.body);
  const saved = await supplier.save();

  res.json(saved);
});

module.exports = router;