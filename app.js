const express = require("express");
const app = express();
const sequelize = require("./src/database/index");
const cors = require("cors");

// SETTINGS
app.disable("x-powered-by");
const PORT = 8000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

app.get("/", (req, res) => res.json("Hola Mundo (INDEX APP)"));

// SERVER RUN

app.listen(PORT, () => {
  console.log(`APP LISTEN ON PORT ${PORT}`);
  sequelize
    .sync({ force: false })
    .then(() => console.log("Conectado a la base de datos!!"))
    .catch(() => console.log("Error De Conexion A La Base De Datos"));
});
