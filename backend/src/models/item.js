const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    produto: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidadeEstoque: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('iten', itemSchema) // 's' final