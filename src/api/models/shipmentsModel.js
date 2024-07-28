const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "..", "data", "shipments.json");

async function getShipments() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data).shipments;
    } catch (error) {
        throw new Error("Error at read the data in shipments");
    }
}

async function getShipments2() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Error at read the data in shipments");
    }
}

async function saveShipments(data) {
    try {
        const stringData = JSON.stringify({ shipments: data}, null, 2);
        await fs.writeFile(FILE_PATH, stringData, "utf-8");
    } catch (error) {
        throw new Error("Error at saving the data in shipments");
    }
}

module.exports = {
    getShipments,
    getShipments2,
    saveShipments
};