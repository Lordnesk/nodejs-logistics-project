const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "..", "data", "drivers.json");

async function getDrivers() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data).drivers;
    } catch (error) {
        throw new Error("Error at read the data in drivers");
    }
}

async function getDrivers2() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Error at read the data in drivers");
    }
}

async function saveDrivers(data) {
    try {
        const stringData = JSON.stringify({drivers: data}, null, 2);
        await fs.writeFile(FILE_PATH, stringData, "utf-8");
    } catch (error) {
        throw new Error("Error at saving the data in drivers");
    }
}

module.exports = {
    getDrivers,
    getDrivers2,
    saveDrivers
};