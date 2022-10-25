const itensModel = require('../models/item')

const pegarItens = (req, res) => {
    itensModel.find()
        .then((itens) => res.status(200).json(itens))
}

const addItens = (req, res) => {}

module.exports = { pegarItens }