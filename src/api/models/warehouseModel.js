const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "..","data","warehouses.json");

async function getWarehouse() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data).warehouses
    } catch (error) {
        throw new Error("Error reading the data in warehouses")
    };
};

async function getWarehouse2() {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data)
    } catch (error) {
        throw new Error("Error reading the data in warehouses")
    };
};

async function saveWarehouse(data) {
    try {
        const stringData = JSON.stringify({warehouses: data}, null, 2);
        await fs.writeFile(FILE_PATH,stringData,"utf-8");
    } catch (error) {
        throw new Error("Error writing the data in warehouses")
    };
};

module.exports = {
    getWarehouse,
    getWarehouse2,
    saveWarehouse
}
