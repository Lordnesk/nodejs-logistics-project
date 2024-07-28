const warehouseModel = require("../models/warehouseModel");

exports.createWarehouse = async (req,res) => {
    try {
        const warehouses = await warehouseModel.getWarehouse();
        const newId = warehouses.length > 0 ? Math.max(...warehouses.map(warehouse => warehouse.id)) + 1 : 1;
        const newWarehouse = {
            id: newId,
            ...req.body
        };
        warehouses.push(newWarehouse);
        await warehouseModel.saveWarehouse(warehouses);
        res.status(201).send({message: "Warehouse created succesfully", warehouse: newWarehouse});
    } catch (error) {
        res.status(404).send({message: "Error creating warehouse", error:error.message})
    }
};

exports.getAllWarehouses = async (req,res) => {
    try {
        const warehouses = await warehouseModel.getWarehouse2();
        res.status(201).send(warehouses)
    } catch (error) {
        res.status(401).send({message: "Error reading the warehouses"})
    }
};

exports.getWarehouseById = async (req,res) => {
    const warehouses = await warehouseModel.getWarehouse();
    const warehouse = warehouses.find(w => w.id === parseInt(req.params.id));
    if (warehouse) {
        res.status(201).send(warehouse);
    } else {
        res.status(404).send({message: "Can't find the warehouse"})
    }
};

exports.updateWarehouse = async (req, res) => {
    const warehouses = await warehouseModel.getWarehouse();
    const index = warehouses.findIndex(w => w.id === parseInt(req.params.id));
    if(index !== 1) {
        warehouses[index] = {...warehouses[index], ...req.body};
        await warehouseModel.saveWarehouse(warehouses);
        res.status(201).send({message:"Warehouse updated succesfully"});
    } else{
        res.status(404).send({message:"Error updating the warehouse"})
    };
};

exports.deleteWarehouse = async (req, res) => {
    const warehouses = await warehouseModel.getWarehouse();
    const filteredWarehouse = warehouses.filter(w => w.id !== parseInt(req.params.id));
    if(filteredWarehouse.length !== warehouses.length) {
        await warehouseModel.saveWarehouse(warehouses);
        res.status(201).send({message: "Warehouse deleted sucessfully"})
    } else{
        res.status(201).send({message: "Warehouse not found"})
    };
};