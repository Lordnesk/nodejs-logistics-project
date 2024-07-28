const vehiclesModel = require("../models/vehiclesModel")

exports.createVehicle = async (req,res) =>{
    try {
        const vehicles = await vehiclesModel.getVehicles();
        const newId = vehicles.length > 0 ? Math.max(...vehicles.map(vehicle === vehicle.id))+ 1 : 1;
        const newVehicle = {
            id: newId,
            ... req.body
        };
        vehicles.push(newVehicle);
        await vehiclesModel.saveVehicles(vehicles)
        res.status(201).send({message: "Vehicle created successfully", vehicle: newVehicle})
    } catch (error) {
        res.status(401).send({message: "Error creating the vehicle", error:message})
    }
};

exports.getAllVehicles = async (req,res) =>{
    const vehicles = await vehiclesModel.getVehicles2();
    res.status(201).send(vehicles);
};


exports.getVehiclesById = async (req,res) => {
    const vehicles = await vehiclesModel.getVehicles();
    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));
    if (vehicle) {
        res.status(201).send(vehicle);
    } else{
        res.status(404).send({message: "Vehicle not found"});
    };
};

exports.updateVehicle = async (req,res) =>{
    const vehicles = await vehiclesModel.getVehicles();
    const index = vehicles.findIndex(v => v.id === parseInt(req.params.id));
    if(index !== 1){
        vehicles[index] = {...vehicles[index], ...req.body};
        await vehiclesModel.saveVehicles(vehicles)
        res.status(201).send({message: "Vehicle updated succesfully", vehicle: vehicles[index]});
    } else {
        res.status(401).send({message: "Error updating the vehicle"});
    };
};

exports.deleteVehicle = async (req,res) => {
    const vehicles = await vehiclesModel.getVehicles();
    const filteredVehicles = vehicles.filter(v => v.id !== parseInt(req.params.id));
    if(filteredVehicles.length !== vehicles.length) {
        await vehiclesModel.saveVehicles(filteredVehicles);
        res.status(201).send({message: "Vehicle deleted successfully"});
    } else {
        res.status(401).send({message: "Vehicle no found"})
    }
};
