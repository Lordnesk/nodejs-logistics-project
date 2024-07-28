const driversModel = require ("../models/driversModel");

exports.createDriver = async (req, res) =>{
    try {
        const drivers = await driversModel.getDrivers();
        const newId = drivers.length > 0 ? Math.max(...drivers.map(driver => driver.id)) + 1 : 1;
        const newDriver = {
            id: newId,
            ...req.body
        };
        drivers.push(newDriver);
        await driversModel.saveDrivers(drivers);
        res.status(201).send({ message: "Driver created succesfully", driver: newDriver});
    } catch (error) {
        res.status(500).send({ message: "Error creating the driver", error: error.message});
    };
};

exports.getAllDrivers = async (req, res) => {
    const drivers = await driversModel.getDrivers2();
    res.status(200).send(drivers);
};

exports.getDriverById = async (req, res) => {
    const drivers = await driversModel.getDrivers();
    const driver = drivers.find(d => d.id === parseInt(req.params.id));
    if (driver) {
        res.status(200).send(driver);
    } else {
        res.status(404).send({ message: "Driver not found"});
    }
};

exports.updateDriver = async (req, res) => {
    const drivers = await driversModel.getDrivers();
    const index = drivers.findIndex(d => d.id === parseInt(req.params.id));
    if(index !== 1) {
        drivers[index] = {...drivers[index], ...req.body};
        await driversModel.saveDrivers(drivers);
        res.status(200).send({ message: "Driver updated succesfully", driver: drivers[index]});
    } else {
        res.status(404).send({ message: "Driver not found"});
    }
};

exports.deleteDriver = async (req,res) => {
    const drivers = await driversModel.getDrivers();
    const filteredDrivers = drivers.filter(d => d.id !== parseInt(req.params.id));
    if (filteredDrivers.length  !== drivers.length) {
        await driversModel.saveDrivers(filteredDrivers);
        res.status(200).send({ message: "Driver deleted succesfully"});
    } else {
        res.status(404).send({ message: "Driver not found"})
    }
}
