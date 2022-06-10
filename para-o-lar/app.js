const cardapio = require("./src/routes/restauranteRoutes")

const express = require('express');
const cors = require("cors")

const app = express();

app.use(express.json())


app.use(cors())


app.use("/prato", cardapio)



module.exports = app



