const express = require("express")
const controller = require("../controller/restauranteController")
const routes = express.Router()
routes.get("/todos", controller.todosPratos)
module.exports = routes
