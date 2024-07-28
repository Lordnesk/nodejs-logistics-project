const express = require("express");
const router = express.Router();
const shipmentsController = require("../controllers/shipmentsController.js");

//Create a new driver
router.post('/', shipmentsController.createShipment);

//Show all drivers
router.get('/', shipmentsController.getAllShipments);

//Look for a driver by his ID
router.get('/:id', shipmentsController.getShipmentsById);

//update driver by his ID
router.put('/:id', shipmentsController.updateShipment);

//Delete drivers
router.delete('/:id', shipmentsController.deleteShipment);

module.exports = router;