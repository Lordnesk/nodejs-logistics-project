const express = require("express")
const driversRoutes = require("./api/routes/driversRoutes.js");
const shipmentsRoutes = require("./api/routes/shipmentsRoutes.js");
const vehiclesRoutes = require("./api/routes/vehiclesRoutes.js");
const warehousesRoutes = require("./api/routes/warehousesRoutes.js");


const app = express();

app.use(express.json()); // middleware para parsear JSON

app.get("/", (req, res) => {
    res.send("This is working");
});

app.use("/drivers", driversRoutes);
app.use("/shipments", shipmentsRoutes);
app.use("/vehicles", vehiclesRoutes);
app.use("/warehouses", warehousesRoutes);


module.exports = app;
