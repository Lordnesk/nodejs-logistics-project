const shipmentsModel = require("../models/shipmentsModel")

exports.createShipment = async (req, res) => {
    try {
        const shipments = await shipmentsModel.getShipments();
        const newId = shipments.length > 0 ? Math.max(...shipments.map(shipment => shipment.id)) + 1 : 1;  
        const newShipment = {
            id: newId,
            ...req.body
        };
        shipments.push(newShipment);
        await shipmentsModel.saveShipments(shipments);
        res.status(201).send({message: "Shipment created succesfully", shipment: newShipment});
    } catch (error) {
        res.status(401).send({message: "Error creating the shipment", error: error.message})
    }
}

exports.getAllShipments = async (req,res) => {
    const shipments = await shipmentsModel.getShipments2();
    res.status(200).send(shipments);
};

exports.getShipmentsById = async (req, res) => {
    const shipments = await shipmentsModel.getShipments();
    const shipment = shipments.find(s => s.id === parseInt(req.params.id));
    if (shipment) {
        res.status(200).send(shipment);
    } else {
        res.status(404).send({message: "Shipment not found"});
    }
};

exports.updateShipment = async (req, res) => {
    const shipments = await shipmentsModel.getShipments();
    const index = shipments.findIndex(s => s.id === parseInt(req.params.id));
    if(index !== 1) {
        shipments[index] = {...shipments[index], ...req.body};
        await shipmentsModel.saveShipments(shipments);
        res.status(200).send({ message: "Shipment updated succesfully", shipment: shipments[index]});
    } else {
        res.status(404).send({message: "Shipment not found"});
    }
}

exports.deleteShipment = async (req,res) => {
    const shipments = await shipmentsModel.getShipments();
    const filteredShipments = shipments.filter(s => s.id !== parseInt(req.params.id));
    if (filteredShipments.length  !== shipments.length) {
        await shipmentsModel.saveShipments(filteredShipments);
        res.status(200).send({ message: "Shipment deleted succesfully"});
    } else {
        res.status(404).send({ message: "Shipment not found"})
    }
}