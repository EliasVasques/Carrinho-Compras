const itensModel = require('../models/item')

const pegarItens = (req, res) => {
    itensModel.find()
        .then((itens) => res.status(200).json(itens))
}

const addItens = (req, res) => {
    novoItem = new itensModel( req.body )
    try {
        novoItem.save()
        res.status(200).json(novoItem)
    } catch (erro) {
        res.status(400).json({ erro: erro.message })
    }
}

module.exports = { pegarItens, addItens }