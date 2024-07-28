const express = require("express");
const route = express.Router();
const warehouseControllers = require("../controllers/warehouseController.js")

route.get("/", warehouseControllers.getAllWarehouses);

route.post("/", warehouseControllers.createWarehouse);

route.get("/:id", warehouseControllers.getWarehouseById);

route.put("/:id", warehouseControllers.updateWarehouse);

route.delete("/id", warehouseControllers.deleteWarehouse);

module.exports = route;