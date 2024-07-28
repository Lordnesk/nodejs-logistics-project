const express = require("express");
const router = express.Router();
const vehicleControllers = require("../controllers/vehiclesController.js");

router.get("/", vehicleControllers.getAllVehicles);

router.post("/", vehicleControllers.createVehicle);

router.get("/:id", vehicleControllers.getVehiclesById);

router.put("/:id", vehicleControllers.updateVehicle);

router.delete("/:id", vehicleControllers.deleteVehicle);

module.exports = router
