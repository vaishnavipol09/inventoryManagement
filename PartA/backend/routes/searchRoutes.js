const express = require("express");
const router = express.Router();
const inventory = require("../data/inventory.json");

router.get("/", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = inventory;

  if (q) {
    results = results.filter(item =>
      item.product_name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    results = results.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (minPrice) {
    results = results.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    results = results.filter(item => item.price <= Number(maxPrice));
  }

  res.json(results);
});

module.exports = router;