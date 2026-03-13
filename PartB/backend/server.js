const express = require("express");
const mongoose = require("mongoose");
const supplierRoutes = require("./routes/supplierRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.use("/supplier", supplierRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(5001, () => {
  console.log("Server running on port 5001");
});