const cardapio = require("../models/cardapioModels.json")

const todosPratos = (request, response) => {
    response.status(200).json({
        "mensagem": " Pratos cadastrados em nosso cardapio:",
        cardapio
    })
}

module.exports = {
    todosPratos
}

