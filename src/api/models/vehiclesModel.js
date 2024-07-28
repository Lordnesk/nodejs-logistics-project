const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "..", "..", "data", "vehicles.json");

async function getVehicles() {
    try {
        const data = await fs.readFile(FILE_PATH,"utf-8");
        return JSON.parse(data).vehicles;
    } catch (error) {
        throw new Error("Error at read data in vehicles");
    };
};

async function getVehicles2(){
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Error at read data in vehicles");
    }
};

async function saveVehicles() {
    try {
        const dataString = JSON.stringify({vehicles: data}, null, 2);
        return fs.writeFile(FILE_PATH,dataString,"utf-8")
    } catch (error) {
        throw new Error("Error at saving data in vehicles");
    }
};

module.exports = {
    getVehicles,
    getVehicles2,
    saveVehicles
}