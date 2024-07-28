const express = require("express");
const router = express.Router();
const driversController = require("../controllers/driversController");

//Create a new driver
router.post('/', driversController.createDriver);

//Show all drivers
router.get('/', driversController.getAllDrivers);

//Look for a driver by his ID
router.get('/:id', driversController.getDriverById);

//update driver by his ID
router.put('/:id', driversController.updateDriver);

//Delete driver
router.delete('/:id', driversController.deleteDriver);

module.exports = router;